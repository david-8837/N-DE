import React from 'react';
import { Sliders, Shield, Bell, RefreshCw, Monitor, Globe } from '../icons';
import { SettingsSwitch } from '../utils/helpers';
import { isDesktopApp } from '../utils/desktop';

export interface SettingsViewProps {
  allowAnalytics: boolean;
  setAllowAnalytics: (val: boolean) => void;
  launchAtStartup: boolean;
  setLaunchAtStartup: (val: boolean) => void;
  allowTerminalSmartActions: boolean;
  setAllowTerminalSmartActions: (val: boolean) => void;
  allowDeviceNotifications: boolean;
  setAllowDeviceNotifications: (val: boolean) => void;
  onResetFactoryDefaults: () => void;
  onShowOnboarding: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  allowAnalytics,
  setAllowAnalytics,
  launchAtStartup,
  setLaunchAtStartup,
  allowTerminalSmartActions,
  setAllowTerminalSmartActions,
  allowDeviceNotifications,
  setAllowDeviceNotifications,
  onResetFactoryDefaults,
  onShowOnboarding,
}) => {
  const isDesktop = isDesktopApp();

  return (
    <div className="flex-1 flex flex-col p-8 max-w-4xl mx-auto w-full select-none">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
          <Sliders className="w-6 h-6 text-blue-400" />
          Application Settings
        </h1>
        <p className="text-sm text-neutral-400 mt-1">
          Configure desktop application preferences, security sandboxing, and device interaction.
        </p>
      </div>

      <div className="space-y-6">
        {/* Security & Smart Action Permissions */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2.5 mb-4">
            <Shield className="w-5 h-5 text-blue-400" />
            <h2 className="text-base font-semibold text-white">Security & Execution Sandbox</h2>
          </div>
          <div className="space-y-3">
            <SettingsSwitch
              checked={allowTerminalSmartActions}
              onChange={setAllowTerminalSmartActions}
              title="Allow Local Terminal & Shell Execution"
              description="Let Smart Actions run allow-listed developer commands (git, npm, node, docker…). Enforced in the desktop app; blocked by default."
            />
            <SettingsSwitch
              checked={allowAnalytics}
              onChange={setAllowAnalytics}
              title="Local Crash Diagnostics"
              description="Write anonymous crash details to diagnostics.log on this device. Nothing is uploaded."
            />
          </div>
        </div>

        {/* System & Startup */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2.5 mb-4">
            <Bell className="w-5 h-5 text-indigo-400" />
            <h2 className="text-base font-semibold text-white">System & Notifications</h2>
          </div>
          <div className="space-y-3">
            <SettingsSwitch
              checked={launchAtStartup}
              onChange={setLaunchAtStartup}
              title="Launch at Windows Startup"
              description="Start NØDE Studio when you sign in. Desktop app only — saved for later in the browser."
            />
            <SettingsSwitch
              checked={allowDeviceNotifications}
              onChange={setAllowDeviceNotifications}
              title="Hardware Connection Notifications"
              description="Show an OS notification when the RP2040-Zero connects or disconnects."
            />
          </div>
        </div>

        {/* Desktop integration status */}
        <div className="flex items-start gap-2.5 text-xs text-neutral-400 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3">
          {isDesktop ? (
            <Monitor className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
          ) : (
            <Globe className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
          )}
          <p>
            {isDesktop
              ? 'Desktop integration active: startup, notifications and execution policies are enforced by the app.'
              : 'Running in a browser: startup items, OS notifications and shell execution are unavailable. Keymaps, ratings and preferences still save to this device.'}
          </p>
        </div>

        {/* Version and Diagnostics */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Node app version:</div>
            <div className="text-xs font-mono text-neutral-400 mt-0.5">v1.0.2 (Build 2026.11)</div>
          </div>

          <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onShowOnboarding}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 border border-white/10 text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Show welcome guide
          </button>
          <button
            type="button"
            onClick={onResetFactoryDefaults}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-medium transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset to Factory Defaults
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
