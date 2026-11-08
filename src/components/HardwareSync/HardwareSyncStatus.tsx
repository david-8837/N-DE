// src/components/HardwareSync/HardwareSyncStatus.tsx - Hardware Connection Badge & Synchronization Pill
import React from 'react';
import { RefreshCw, CheckCircle2, AlertCircle } from '../../icons';

interface HardwareSyncStatusProps {
  connected: boolean;
  syncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  onSync: () => void;
  onConnect: () => void;
}

export function HardwareSyncStatus({
  connected,
  syncStatus,
  onSync,
  onConnect,
}: HardwareSyncStatusProps) {
  if (!connected) {
    return (
      <button
        onClick={onConnect}
        className="h-[26px] px-[10px] rounded-full bg-[#0051ff] hover:bg-[#0042d1] text-white text-[10.5px] font-medium flex items-center gap-[5px] transition-colors shadow-xs cursor-pointer"
      >
        <span>Connect RP2040</span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-[6px]">
      <span className="flex items-center gap-[4px] px-[8px] py-[3px] rounded-full bg-[#10b981]/15 text-[#059669] text-[10px] font-medium">
        <span className="w-[5px] h-[5px] rounded-full bg-[#10b981] animate-pulse" />
        <span>Connected</span>
      </span>

      <button
        onClick={onSync}
        disabled={syncStatus === 'syncing'}
        className={`h-[26px] px-[9px] rounded-full text-[10.5px] font-medium flex items-center gap-[5px] transition-colors cursor-pointer ${
          syncStatus === 'synced'
            ? 'bg-[#10b981] text-white'
            : syncStatus === 'error'
            ? 'bg-[#ef4444] text-white'
            : syncStatus === 'syncing'
            ? 'bg-[#e0e0e0] text-[#666666]'
            : 'bg-white hover:bg-neutral-50 text-[#0051ff] border border-[#0051ff]'
        }`}
      >
        {syncStatus === 'syncing' ? (
          <>
            <RefreshCw className="w-[11px] h-[11px] animate-spin" />
            <span>Flashing...</span>
          </>
        ) : syncStatus === 'synced' ? (
          <>
            <CheckCircle2 className="w-[11px] h-[11px]" />
            <span>Flashed</span>
          </>
        ) : syncStatus === 'error' ? (
          <>
            <AlertCircle className="w-[11px] h-[11px]" />
            <span>Retry Flash</span>
          </>
        ) : (
          <>
            <RefreshCw className="w-[11px] h-[11px]" />
            <span>Flash to MCU</span>
          </>
        )}
      </button>
    </div>
  );
}
