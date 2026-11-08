import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface PresetAppIconProps {
  iconId: string;
  className?: string;
}

export const PresetAppIcon: React.FC<PresetAppIconProps> = ({ iconId, className = 'w-6 h-6' }) => {
  const iconMap: Record<string, string> = {
    Framer: 'Layers',
    Photoshop: 'Brush',
    Premiere: 'Video',
    VSCode: 'Code2',
    Blender: 'Box',
    Figma: 'PenTool',
    Ableton: 'Music',
    Discord: 'MessageSquare',
  };

  const resolved = iconMap[iconId] || iconId || 'Sparkles';
  const IconComp = (LucideIcons as any)[resolved] || LucideIcons.Sparkles;

  return <IconComp className={className} />;
};
