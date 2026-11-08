import React from 'react';
import { Plus } from '../icons';

export const EmptyKeyPlusIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <div className="flex flex-col items-center justify-center text-neutral-500 group-hover:text-neutral-300 transition-colors">
      <Plus className={className} />
    </div>
  );
};
