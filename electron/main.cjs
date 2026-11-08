// electron/main.cjs - NØDE Grid Macro 1 Desktop Application Entry Point for Windows
const { app, BrowserWindow, ipcMain, Menu, shell } = require('electron');
const { spawn, execFile } = require('child_process');
const path = require('path');
const fs = require('fs');

let mainWindow = null;
let psWorker = null;

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

// Only our own renderer (dev server or packaged file:// bundle) may call IPC.
function isTrustedSender(event) {
  try {
    const frameUrl = event.senderFrame && event.senderFrame.url;
    const url = frameUrl || (event.sender && event.sender.getURL()) || '';
    if (url.startsWith('file://')) return true;
    if (url.startsWith('http://localhost:3000') || url.startsWith('http://127.0.0.1:3000')) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

// Binaries Smart Actions are allowed to run without a shell.
const SAFE_COMMAND_BINARIES = new Set([
  'git',
  'npm',
  'npx',
  'node',
  'yarn',
  'pnpm',
  'docker',
  'python',
  'python3',
  'code',
  'notepad',
  'calc',
]);

const SAFE_COMMAND_PATTERN = /^[\w.\-:@/\\ ]+$/;

function isBootloaderVolume(dirPath) {
  if (typeof dirPath !== 'string' || dirPath.length === 0) return false;
  try {
    const infoPath = path.join(dirPath, 'INFO_UF2.TXT');
    if (!fs.existsSync(infoPath)) return false;
    const content = fs.readFileSync(infoPath, 'utf8');
    return (
      content.includes('RP2040') ||
      content.includes('Raspberry Pi') ||
      content.includes('RPI-RP2')
    );
  } catch {
    return false;
  }
}

// Safe Virtual Keycode Map for Native Keystroke Injection
const VK_MAP = {
  win: 0x5b,
  lwin: 0x5b,
  rwin: 0x5c,
  gui: 0x5b,
  cmd: 0x5b,
  meta: 0x5b,
  ctrl: 0x11,
  control: 0x11,
  lctrl: 0x11,
  rctrl: 0x11,
  alt: 0x12,
  lalt: 0x12,
  ralt: 0x12,
  opt: 0x12,
  option: 0x12,
  shift: 0x10,
  lshift: 0x10,
  rshift: 0x10,
  enter: 0x0d,
  return: 0x0d,
  esc: 0x1b,
  escape: 0x1b,
  tab: 0x09,
  space: 0x20,
  backspace: 0x08,
  delete: 0x2e,
  del: 0x2e,
  insert: 0x2d,
  ins: 0x2d,
  home: 0x24,
  end: 0x23,
  pageup: 0x21,
  pagedown: 0x22,
  up: 0x26,
  down: 0x28,
  left: 0x25,
  right: 0x27,
  f1: 0x70,
  f2: 0x71,
  f3: 0x72,
  f4: 0x73,
  f5: 0x74,
  f6: 0x75,
  f7: 0x76,
  f8: 0x77,
  f9: 0x78,
  f10: 0x79,
  f11: 0x7a,
  f12: 0x7b,
  prtscr: 0x2c,
  printscreen: 0x2c,
  volup: 0xaf,
  'volume+': 0xaf,
  volume: 0xaf,
  voldown: 0xae,
  'volume-': 0xae,
  mute: 0xad,
  play: 0xb3,
  'play/pause': 0xb3,
  next: 0xb0,
  prev: 0xb1,
};

function parseShortcutToVK(rawStr) {
  const clean = (rawStr || '').toLowerCase().replace(/[\(\)]/g, ' ').trim();
  if (
    clean.includes('volume +') ||
    clean.includes('vol+') ||
    clean.includes('volume up')
  )
    return [0xaf];
  if (
    clean.includes('volume -') ||
    clean.includes('vol-') ||
    clean.includes('volume down')
  )
    return [0xae];
  if (clean.includes('mute')) return [0xad];
  if (clean.includes('play') || clean.includes('pause')) return [0xb3];
  if (clean.includes('next')) return [0xb0];
  if (clean.includes('prev')) return [0xb1];

  const parts = clean
    .split(/[+\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const codes = [];
  for (const part of parts) {
    if (VK_MAP[part]) {
      codes.push(VK_MAP[part]);
    } else if (part.length === 1) {
      codes.push(part.toUpperCase().charCodeAt(0));
    }
  }
  return codes;
}

function initFastWindowsInjector() {
  if (process.platform !== 'win32') return;
  try {
    psWorker = spawn(
      'powershell.exe',
      ['-NoProfile', '-NonInteractive', '-Command', '-'],
      { stdio: ['pipe', 'ignore', 'ignore'] }
    );

    const initScript = `
$w = Add-Type -MemberDefinition '[DllImport("user32.dll")]public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, int dwExtraInfo);' -Name FastWin32Keybd -PassThru
function Press-Keys([byte[]]$codes) {
  foreach ($c in $codes) { [FastWin32Keybd]::keybd_event($c, 0, 0, 0) }
  [System.Threading.Thread]::Sleep(15)
  for ($i = $codes.Length - 1; $i -ge 0; $i--) { [FastWin32Keybd]::keybd_event($codes[$i], 0, 2, 0) }
}
`;
    psWorker.stdin.write(initScript + '\n');
    psWorker.on('error', () => {
      psWorker = null;
    });
    psWorker.on('exit', () => {
      psWorker = null;
    });
  } catch (e) {
    psWorker = null;
  }
}

function injectWindowsKeystrokes(vkCodes) {
  if (!vkCodes || vkCodes.length === 0) return;
  if (psWorker && psWorker.stdin && !psWorker.stdin.destroyed) {
    psWorker.stdin.write(`Press-Keys @(${vkCodes.join(',')})\n`);
  } else {
    initFastWindowsInjector();
    if (psWorker && psWorker.stdin) {
      psWorker.stdin.write(`Press-Keys @(${vkCodes.join(',')})\n`);
    }
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 840,
    minWidth: 1024,
    minHeight: 700,
    backgroundColor: '#0a0a0a',
    title: 'NØDE — Grid Macro 1 Studio',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0e0e0e',
      symbolColor: '#ffffff',
      height: 38,
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: true,
      sandbox: true, // Hardened Sandbox Enabled
    },
    icon: path.join(__dirname, '../public/favicon.ico'),
    show: false,
  });

  const ses = mainWindow.webContents.session;

  // Granular WebHID & Web Serial permission checking
  ses.setDevicePermissionHandler((details) => {
    // Only allow HID and Serial for USB devices
    if (details.deviceType === 'hid' || details.deviceType === 'serial') {
      return true;
    }
    return false;
  });

  // Strict permission handler: only allow 'serial' and 'hid' when originating from internal app
  ses.setPermissionCheckHandler((webContents, permission, requestingOrigin) => {
    // Allow serial and hid permissions for local dev and packaged file protocols
    if (permission === 'serial' || permission === 'hid') {
      if (
        requestingOrigin.startsWith('http://localhost:') ||
        requestingOrigin.startsWith('http://127.0.0.1:') ||
        requestingOrigin === 'null' ||
        requestingOrigin.startsWith('file:')
      ) {
        return true;
      }
    }
    // Block all other high-privilege permissions (camera, microphone, geolocation, etc.)
    return false;
  });

  // Explicit permission prompts: only the device APIs this studio needs.
  ses.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'serial' || permission === 'hid') return callback(true);
    return callback(false);
  });

  // Automatically select connected RP2040-Zero device when requested by web app
  ses.on('select-serial-port', (event, portList, webContents, callback) => {
    event.preventDefault();
    if (portList && portList.length > 0) {
      const rp2040Port = portList.find(
        (p) =>
          p.vendorId === '2e8a' ||
          p.vendorId === '2E8A' ||
          (p.displayName && p.displayName.includes('RP2040'))
      );
      callback(rp2040Port ? rp2040Port.portId : portList[0].portId);
    } else {
      callback('');
    }
  });

  ses.on('select-hid-device', (event, details, callback) => {
    event.preventDefault();
    if (details.deviceList && details.deviceList.length > 0) {
      const rp2040Hid = details.deviceList.find(
        (d) => d.vendorId === 0x2e8a || d.vendorId === 0xfeed
      );
      callback(rp2040Hid ? rp2040Hid.deviceId : details.deviceList[0].deviceId);
    } else {
      callback('');
    }
  });

  // Load URL
  if (isDev && process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    if (isDev) {
      mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
  });

  // Never let the renderer navigate away from the studio bundle.
  mainWindow.webContents.on('will-navigate', (event, url) => {
    const isInternal =
      url.startsWith('file://') ||
      url.startsWith('http://localhost:3000') ||
      url.startsWith('http://127.0.0.1:3000');
    if (isInternal) return;
    event.preventDefault();
    try {
      const parsed = new URL(url);
      if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
        shell.openExternal(parsed.href);
      }
    } catch {}
  });

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    try {
      const parsed = new URL(url);
      if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
        shell.openExternal(url);
      }
    } catch {}
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// IPC Handlers for Native Windows Control
ipcMain.handle('window-minimize', (event) => {
  if (!isTrustedSender(event)) return false;
  if (mainWindow) mainWindow.minimize();
});

ipcMain.handle('window-maximize', (event) => {
  if (!isTrustedSender(event)) return false;
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.handle('window-close', (event) => {
  if (!isTrustedSender(event)) return false;
  if (mainWindow) mainWindow.close();
});

ipcMain.handle('window-is-maximized', (event) => {
  if (!isTrustedSender(event)) return false;
  return mainWindow ? mainWindow.isMaximized() : false;
});

ipcMain.handle('get-app-version', (event) => {
  if (!isTrustedSender(event)) return null;
  return app.getVersion();
});

// RP2040 Bootloader Volume Detection (RPI-RP2)
ipcMain.handle('detect-rp2040-bootloader', async (event) => {
  if (!isTrustedSender(event)) return { detected: false };
  if (process.platform === 'win32') {
    const letters = 'DEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (const letter of letters) {
      const drive = `${letter}:\\`;
      try {
        const infoPath = path.join(drive, 'INFO_UF2.TXT');
        if (fs.existsSync(infoPath)) {
          const content = fs.readFileSync(infoPath, 'utf8');
          if (
            content.includes('RP2040') ||
            content.includes('Raspberry Pi') ||
            content.includes('RPI-RP2')
          ) {
            return {
              detected: true,
              drivePath: drive,
              volumeLabel: 'RPI-RP2',
              info: content.trim(),
            };
          }
        }
      } catch {}
    }
  } else if (process.platform === 'darwin') {
    const macPath = '/Volumes/RPI-RP2';
    if (fs.existsSync(macPath)) {
      return { detected: true, drivePath: macPath, volumeLabel: 'RPI-RP2' };
    }
  } else {
    const user = process.env.USER || '';
    const candidates = [
      `/media/${user}/RPI-RP2`,
      `/run/media/${user}/RPI-RP2`,
      '/mnt/RPI-RP2',
    ];
    for (const p of candidates) {
      if (fs.existsSync(p)) return { detected: true, drivePath: p, volumeLabel: 'RPI-RP2' };
    }
  }
  return { detected: false };
});

// 1-Click Drag-and-Drop UF2 Firmware Flasher
ipcMain.handle('flash-uf2-firmware', async (event, payload = {}) => {
  try {
    if (!isTrustedSender(event)) {
      return { success: false, error: 'Blocked: untrusted IPC sender.' };
    }
    const { drivePath, firmwareType, customUf2Base64 } = payload;
    const safeFirmwareType = String(firmwareType || 'fw').replace(/[^a-z0-9_-]/gi, '').slice(0, 20) || 'fw';
    let targetDrive = drivePath;
    if (!targetDrive && process.platform === 'win32') {
      const letters = 'DEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      for (const letter of letters) {
        const testPath = `${letter}:\\INFO_UF2.TXT`;
        if (fs.existsSync(testPath)) {
          targetDrive = `${letter}:\\`;
          break;
        }
      }
    }

    if (!targetDrive || !isBootloaderVolume(targetDrive)) {
      return {
        success: false,
        error:
          'Target is not a mounted RP2040 bootloader volume (no valid INFO_UF2.TXT found).',
      };
    }

    const destFileName = `grid_macro_1_${safeFirmwareType}.uf2`;
    const destPath = path.join(targetDrive, destFileName);

    if (customUf2Base64) {
      if (typeof customUf2Base64 !== 'string' || customUf2Base64.length > 12 * 1024 * 1024) {
        return { success: false, error: 'Firmware payload is missing or too large (max 12 MB).' };
      }
      const buffer = Buffer.from(customUf2Base64, 'base64');
      if (buffer.length === 0 || buffer.length > 8 * 1024 * 1024) {
        return { success: false, error: 'Firmware payload could not be decoded.' };
      }
      fs.writeFileSync(destPath, buffer);
      return {
        success: true,
        message: `Successfully flashed firmware (${destFileName}) to RP2040!`,
      };
    }

    const bundledCandidates = [
      path.join(__dirname, `../firmware/grid_macro_1_${firmwareType}.uf2`),
      path.join(__dirname, `../firmware/${firmwareType}.uf2`),
      path.join(app.getAppPath(), `firmware/grid_macro_1_${firmwareType}.uf2`),
    ];

    for (const candidate of bundledCandidates) {
      if (fs.existsSync(candidate)) {
        fs.copyFileSync(candidate, destPath);
        return {
          success: true,
          message: `Flashed bundled ${firmwareType} firmware to ${destPath}`,
        };
      }
    }

    // Never report a flash that did not happen: there is no bundled .uf2 here.
    return {
      success: false,
      error: `RP2040 bootloader is mounted at ${targetDrive}, but no bundled ${safeFirmwareType} .uf2 image was found. Build it from qmk_firmware/grid_macro_1 or supply customUf2Base64.`,
    };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

// Sanitized & Safe Smart Action Execution (Open URL, Launch App, Safe Commands, Inject Keystrokes)
ipcMain.handle('execute-smart-action', async (event, payload) => {
  if (!isTrustedSender(event)) {
    return { success: false, error: 'Blocked: untrusted IPC sender.' };
  }
  if (!payload || typeof payload !== 'object') {
    return { success: false, error: 'Invalid payload' };
  }
  const { type, value } = payload;
  if (!value || typeof value !== 'string') {
    return { success: false, error: 'Invalid action value' };
  }

  try {
    if (type === 'Web') {
      let urlStr = value.trim();
      if (!urlStr.startsWith('http://') && !urlStr.startsWith('https://')) {
        urlStr = 'https://' + urlStr;
      }
      const parsedUrl = new URL(urlStr);
      if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
        await shell.openExternal(parsedUrl.href);
        return { success: true, message: `Opened URL: ${parsedUrl.href}` };
      }
      return { success: false, error: 'Unsupported URL protocol' };
    } else if (type === 'App') {
      const appTarget = value.trim();
      // Common Windows app aliases allowlist
      const SAFE_WIN_APPS = {
        calc: 'calc.exe',
        calculator: 'calc.exe',
        notepad: 'notepad.exe',
        explorer: 'explorer.exe',
        cmd: 'cmd.exe',
        powershell: 'powershell.exe',
        taskmgr: 'taskmgr.exe',
        spotify: 'spotify.exe',
        code: 'code.cmd',
      };
      const cleanKey = appTarget.toLowerCase().replace(/\.exe$/i, '');
      const binaryName = SAFE_WIN_APPS[cleanKey];

      if (!binaryName) {
        // Unknown target: only allow an existing absolute path the user can see.
        if (!path.isAbsolute(appTarget) || !fs.existsSync(appTarget)) {
          return {
            success: false,
            error:
              'Unknown app. Use a supported alias (calc, notepad, explorer, code…) or an absolute path to an existing program.',
          };
        }
        await shell.openPath(appTarget);
        return { success: true, message: `Opened Path: ${appTarget}` };
      }

      if (process.platform === 'win32') {
        execFile('cmd.exe', ['/c', 'start', '', binaryName], { windowsHide: true }, (err) => {
          if (err) console.error('App launch error:', err);
        });
      } else {
        execFile('open', ['-a', appTarget], (err) => {
          if (err) console.error('App launch fallback error:', err);
        });
      }
      return { success: true, message: `Launched App: ${appTarget}` };
    } else if (type === 'Cmd') {
      // Command sanitization & execution protection
      const rawCmd = value.trim();
      // Block dangerous chaining operators when untrusted
      const containsDangerousPipes = /[;&|`$><]/.test(rawCmd);
      if (containsDangerousPipes) {
        return {
          success: false,
          error: 'Security Warning: Command contains restricted shell characters.',
        };
      }
      // Execute command safely as an isolated argument
      if (!SAFE_COMMAND_PATTERN.test(rawCmd)) {
        return {
          success: false,
          error: 'Security Warning: command contains unsupported characters.',
        };
      }
      const parts = rawCmd.split(/\s+/).filter(Boolean);
      if (parts.length > 0) {
        const bin = parts[0].toLowerCase().replace(/\.(exe|cmd|bat)$/, '');
        if (!SAFE_COMMAND_BINARIES.has(bin)) {
          return {
            success: false,
            error: `Blocked: "${bin}" is not an allow-listed command.`,
          };
        }
        const args = parts.slice(1);
        execFile(bin, args, { windowsHide: true, timeout: 5000 }, (err) => {
          if (err) console.error('Cmd execution error:', err);
        });
        return { success: true, message: `Executed Command: ${rawCmd}` };
      }
    } else if (type === 'Shortcut' || type === 'Key' || !type) {
      if (process.platform === 'win32') {
        const vkCodes = parseShortcutToVK(value);
        if (vkCodes.length > 0) {
          injectWindowsKeystrokes(vkCodes);
          return { success: true, message: `Injected Keystroke: ${value}` };
        }
      }
      return { success: true, message: `Shortcut: ${value}` };
    } else if (type === 'Text') {
      return { success: true, message: `Text: ${value}` };
    }
  } catch (err) {
    console.error('Smart Action Error:', err);
    return { success: false, error: err.message };
  }
  return { success: false };
});

// App Lifecycle
app.whenReady().then(() => {
  initFastWindowsInjector();
  createWindow();

  const template = [
    {
      label: 'NØDE Studio',
      submenu: [
        {
          label: 'Reload Configurator',
          accelerator: 'CmdOrCtrl+R',
          click: () => mainWindow && mainWindow.reload(),
        },
        {
          label: 'Toggle Fullscreen',
          accelerator: 'F11',
          click: () =>
            mainWindow && mainWindow.setFullScreen(!mainWindow.isFullScreen()),
        },
        { type: 'separator' },
        {
          label: 'Quit NØDE Studio',
          accelerator: 'CmdOrCtrl+Q',
          click: () => app.quit(),
        },
      ],
    },
    {
      label: 'Hardware',
      submenu: [
        {
          label: 'Sync to RP2040-Zero',
          click: () =>
            mainWindow &&
            mainWindow.webContents.send('trigger-hardware-sync'),
        },
        {
          label: 'Open Hardware Inspector',
          click: () =>
            mainWindow &&
            mainWindow.webContents.send('open-hardware-modal'),
        },
      ],
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'QMK Documentation',
          click: () => shell.openExternal('https://docs.qmk.fm'),
        },
        {
          label: 'Waveshare RP2040-Zero Pinout',
          click: () =>
            shell.openExternal(
              'https://www.waveshare.com/wiki/RP2040-Zero'
            ),
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (psWorker) {
    try {
      psWorker.kill();
    } catch {}
    psWorker = null;
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
