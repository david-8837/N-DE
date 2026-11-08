// src/components/LightingControls/LightingPopover.tsx - RGB Lighting Controls (Backlight & Underglow)
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface LightingSetting {
  preset: 'Off' | 'Solid' | 'Snake' | 'Rainbow' | 'Breath' | 'Gradient';
  light: number;
  speed: number;
  magic: number;
  hue: number;
  colorHex: string;
}

export type LightingConfigMap = Record<'Backlight' | 'Underglow', LightingSetting>;

interface LightingPopoverProps {
  isOpen: boolean;
  layerDeleteConfirm: boolean;
  lightingTab: 'Backlight' | 'Underglow';
  setLightingTab: (tab: 'Backlight' | 'Underglow') => void;
  lightingConfig: LightingConfigMap;
  setLightingConfig: React.Dispatch<React.SetStateAction<LightingConfigMap>>;
  hueToHex: (h: number) => string;
  onApplyToAllLayers: () => void;
}

export function LightingPopover({
  isOpen,
  layerDeleteConfirm,
  lightingTab,
  setLightingTab,
  lightingConfig,
  setLightingConfig,
  hueToHex,
  onApplyToAllLayers,
}: LightingPopoverProps) {
  return (
    <AnimatePresence>
      {isOpen && !layerDeleteConfirm && (
        <motion.div
          key="layer-lighting-popover"
          initial={{ opacity: 0, y: -6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.96 }}
          transition={{
            duration: 0.2,
            ease: [0.32, 0.72, 0, 1],
          }}
          style={{ transformOrigin: 'top center' }}
          className="absolute top-[37px] left-1/2 -translate-x-[38%] w-[228px] bg-[#e2e2e2] rounded-[18px] p-[9px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-black/[0.04] z-50"
        >
          {/* Top Mode Toggle: Backlight | Underglow */}
          <div className="grid grid-cols-2 gap-[6px] mb-[8px]">
            {(['Backlight', 'Underglow'] as const).map((mode) => {
              const isActiveMode = lightingTab === mode;
              return (
                <button
                  key={mode}
                  onClick={() => setLightingTab(mode)}
                  className={`h-[26px] rounded-full border-[1.5px] border-transparent hover:border-[#0051ff] text-[10.5px] font-medium transition-all cursor-pointer ${
                    isActiveMode
                      ? 'bg-[#000000] text-white'
                      : 'bg-white text-[#555555]'
                  }`}
                >
                  {mode}
                </button>
              );
            })}
          </div>

          {/* Presets Card */}
          <div className="bg-[#eeeeee] rounded-[14px] p-[10px] mb-[8px]">
            <div className="text-[11px] font-normal text-[#555555] mb-[7px] text-left">
              Presets
            </div>
            <div className="grid grid-cols-3 gap-[5px]">
              {(
                [
                  'Off',
                  'Solid',
                  'Snake',
                  'Rainbow',
                  'Breath',
                  'Gradient',
                ] as const
              ).map((presetName) => {
                const isSelected =
                  lightingConfig[lightingTab].preset === presetName;
                return (
                  <button
                    key={presetName}
                    onClick={() =>
                      setLightingConfig((prev) => ({
                        ...prev,
                        [lightingTab]: {
                          ...prev[lightingTab],
                          preset: presetName,
                        },
                      }))
                    }
                    className={`h-[24px] rounded-full border-[1.5px] border-transparent hover:border-[#0051ff] text-[10px] font-normal transition-all cursor-pointer flex items-center justify-center ${
                      isSelected
                        ? 'bg-[#000000] text-white'
                        : 'bg-white text-[#555555]'
                    }`}
                  >
                    {presetName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Adjustments Card */}
          <div className="bg-[#eeeeee] rounded-[14px] p-[10px] mb-[8px]">
            <div className="text-[11px] font-normal text-[#555555] mb-[7px] text-left">
              Adjustments
            </div>
            {(() => {
              const cfg = lightingConfig[lightingTab];
              const isOff = cfg.preset === 'Off';
              return (
                <div className="space-y-[6px]">
                  {/* Light Slider */}
                  <div
                    className={`flex items-center gap-[8px] ${
                      isOff ? 'opacity-35 pointer-events-none' : ''
                    }`}
                  >
                    <span className="w-[38px] text-left text-[10px] text-[#555555] shrink-0">
                      Light
                    </span>
                    <div className="relative flex-1 h-[14px] flex items-center">
                      <div className="w-full h-[3px] bg-[#d0d0d0] rounded-full" />
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={cfg.light}
                        onChange={(e) =>
                          setLightingConfig((prev) => ({
                            ...prev,
                            [lightingTab]: {
                              ...prev[lightingTab],
                              light: Number(e.target.value),
                            },
                          }))
                        }
                        className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
                      />
                      <div
                        style={{
                          left: `calc(${cfg.light}% - 5.5px)`,
                        }}
                        className="absolute w-[11px] h-[11px] rounded-full bg-white border border-[#444444] pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Speed Slider */}
                  <div
                    className={`flex items-center gap-[8px] ${
                      isOff ? 'opacity-35 pointer-events-none' : ''
                    }`}
                  >
                    <span className="w-[38px] text-left text-[10px] text-[#555555] shrink-0">
                      Speed
                    </span>
                    <div className="relative flex-1 h-[14px] flex items-center">
                      <div className="w-full h-[3px] bg-[#d0d0d0] rounded-full" />
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={cfg.speed}
                        onChange={(e) =>
                          setLightingConfig((prev) => ({
                            ...prev,
                            [lightingTab]: {
                              ...prev[lightingTab],
                              speed: Number(e.target.value),
                            },
                          }))
                        }
                        className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
                      />
                      <div
                        style={{
                          left: `calc(${cfg.speed}% - 5.5px)`,
                        }}
                        className="absolute w-[11px] h-[11px] rounded-full bg-white border border-[#444444] pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Magic Slider */}
                  <div
                    className={`flex items-center gap-[8px] ${
                      isOff ? 'opacity-35 pointer-events-none' : ''
                    }`}
                  >
                    <span className="w-[38px] text-left text-[10px] text-[#555555] shrink-0">
                      Magic
                    </span>
                    <div className="relative flex-1 h-[14px] flex items-center">
                      <div className="w-full h-[3px] bg-[#d0d0d0] rounded-full" />
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={cfg.magic}
                        onChange={(e) =>
                          setLightingConfig((prev) => ({
                            ...prev,
                            [lightingTab]: {
                              ...prev[lightingTab],
                              magic: Number(e.target.value),
                            },
                          }))
                        }
                        className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
                      />
                      <div
                        style={{
                          left: `calc(${cfg.magic}% - 5.5px)`,
                        }}
                        className="absolute w-[11px] h-[11px] rounded-full bg-white border border-[#444444] pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Color Rainbow Slider */}
                  <div
                    className={`flex items-center gap-[8px] ${
                      isOff ? 'opacity-35 pointer-events-none' : ''
                    }`}
                  >
                    <span className="w-[38px] text-left text-[10px] text-[#555555] shrink-0">
                      Color
                    </span>
                    <div className="relative flex-1 h-[14px] flex items-center">
                      <div
                        className="w-full h-[3px] rounded-full"
                        style={{
                          background:
                            'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)',
                        }}
                      />
                      <input
                        type="range"
                        min={0}
                        max={360}
                        value={cfg.hue}
                        onChange={(e) => {
                          const nextHue = Number(e.target.value);
                          setLightingConfig((prev) => ({
                            ...prev,
                            [lightingTab]: {
                              ...prev[lightingTab],
                              hue: nextHue,
                              colorHex: hueToHex(nextHue),
                            },
                          }));
                        }}
                        className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
                      />
                      <div
                        style={{
                          left: `calc(${(cfg.hue / 360) * 100}% - 5.5px)`,
                        }}
                        className="absolute w-[11px] h-[11px] rounded-full bg-white border border-[#444444] pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Hex Input Pill + Swatch Circle */}
                  <div
                    className={`ml-[46px] h-[24px] rounded-full bg-[#e2e2e2] px-[10px] flex items-center justify-between ${
                      isOff ? 'opacity-35 pointer-events-none' : ''
                    }`}
                  >
                    <input
                      type="text"
                      value={cfg.colorHex}
                      onChange={(e) =>
                        setLightingConfig((prev) => ({
                          ...prev,
                          [lightingTab]: {
                            ...prev[lightingTab],
                            colorHex: e.target.value,
                          },
                        }))
                      }
                      className="w-[85px] bg-transparent text-[10px] text-[#555555] uppercase focus:outline-none"
                    />
                    <span
                      className="w-[11px] h-[11px] rounded-full shrink-0 border border-black/10"
                      style={{
                        backgroundColor: cfg.colorHex,
                      }}
                    />
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Apply to all layers button */}
          <button
            onClick={onApplyToAllLayers}
            className="w-full h-[25px] rounded-full bg-white hover:bg-neutral-50 border-[1.5px] border-transparent hover:border-[#0051ff] text-[10px] font-normal text-[#555555] flex items-center justify-center transition-all cursor-pointer"
          >
            Apply to all layers
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
