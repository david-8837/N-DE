import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface CustomPickerIconProps {
  name: string;
  className?: string;
}

export const CustomPickerIcon: React.FC<CustomPickerIconProps> = ({ name, className = 'w-4 h-4' }) => {
  const IconComp = (LucideIcons as any)[name] || LucideIcons.Sparkles;
  return <IconComp className={className} />;
};
