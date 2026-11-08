import React from 'react';
import { KeySlotId, LayerKeymap } from '../../types';
import { MacropadDevice } from '../MacropadDevice';

export interface KeyMatrixVisualizerProps {
  currentLayer: LayerKeymap;
  selectedKey: KeySlotId;
  onSelectKey: (slotId: KeySlotId) => void;
  dialAngle: number;
  isSimulating: boolean;
  activeSimulatedKey: string | null;
  onRotateCW: () => void;
  onRotateCCW: () => void;
  onDialPress: () => void;
}

export function KeyMatrixVisualizer({
  currentLayer,
  selectedKey,
  onSelectKey,
  dialAngle,
  isSimulating,
  activeSimulatedKey,
  onRotateCW,
  onRotateCCW,
  onDialPress,
}: KeyMatrixVisualizerProps) {
  return (
    <div className="flex flex-col items-center justify-center select-none">
      <MacropadDevice
        currentLayer={currentLayer}
        selectedKey={selectedKey}
        onSelectKey={onSelectKey}
        isSimulating={isSimulating}
        activeSimulatedKey={activeSimulatedKey}
        dialAngle={dialAngle}
        onRotateCW={onRotateCW}
        onRotateCCW={onRotateCCW}
        onDialPress={onDialPress}
      />
    </div>
  );
}
