import React from 'react';
import { Sliders, Shield, Bell, RefreshCw } from 'lucide-react';
import { SettingsSwitch } from '../utils/helpers';

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
}) => {
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
              description="Permit Smart Actions to run developer commands (git, npm, docker) via sanitized background execution."
            />
            <SettingsSwitch
              checked={allowAnalytics}
              onChange={setAllowAnalytics}
              title="Anonymous Telemetry & Crash Reporting"
              description="Help improve NØDE firmware stability by sharing anonymous diagnostics."
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
              description="Start NØDE Grid Macro 1 background daemon in system tray on boot."
            />
            <SettingsSwitch
              checked={allowDeviceNotifications}
              onChange={setAllowDeviceNotifications}
              title="Hardware Connection Notifications"
              description="Show OS desktop toast notifications when RP2040-Zero is connected or disconnected."
            />
          </div>
        </div>

        {/* Version and Diagnostics */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Node app version:</div>
            <div className="text-xs font-mono text-neutral-400 mt-0.5">v1.0.2 (Build 2026.11)</div>
          </div>

          <button
            onClick={onResetFactoryDefaults}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-medium transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset to Factory Defaults
          </button>
        </div>
      </div>
    </div>
  );
};
