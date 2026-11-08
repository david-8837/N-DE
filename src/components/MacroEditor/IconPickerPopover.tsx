// src/components/MacroEditor/IconPickerPopover.tsx - Lazy-Loaded Icon & Emoji Selector Popover
import React, { useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Sparkles } from '../../icons';
import { useDialogFocus } from '../../hooks/useDialogFocus';

export interface IconPickerPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectIcon: (iconName: string) => void;
  onSelectEmoji: (emojiChar: string) => void;
  selectedIconId?: string;
  selectedEmoji?: string;
}

export function IconPickerPopover({
  isOpen,
  onClose,
  onSelectIcon,
  onSelectEmoji,
}: IconPickerPopoverProps) {
  const [tab, setTab] = useState<'Icon' | 'Emoji'>('Icon');
  const [search, setSearch] = useState('');
  const [iconEntries, setIconEntries] = useState<{ id: string; name: string; keywords: string }[]>([]);
  const [emojiEntries, setEmojiEntries] = useState<{ emoji: string; name: string; keywords: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lucideModule, setLucideModule] = useState<Record<
    string,
    React.ComponentType<{ className?: string }>
  > | null>(null);
  const titleId = useId();
  const searchRef = useRef<HTMLInputElement>(null);
  const dialogRef = useDialogFocus(isOpen, onClose, searchRef);

  // Dynamic on-demand code-splitting of the 500KB icon/emoji database
  useEffect(() => {
    if (isOpen && iconEntries.length === 0) {
      setIsLoading(true);
      Promise.all([import('../../iconLibrary'), import('lucide-react')])
        .then(([mod, lucide]) => {
          setIconEntries(mod.ALL_ICON_ENTRIES);
          setEmojiEntries(mod.ALL_EMOJI_ENTRIES);
          setLucideModule(lucide as unknown as Record<string, React.ComponentType<{ className?: string }>>);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Failed to load icon library:', err);
          setIsLoading(false);
        });
    }
  }, [isOpen, iconEntries.length]);

  if (!isOpen) return null;

  const filteredIcons = iconEntries.filter((item) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return item.name.toLowerCase().includes(q) || item.keywords.toLowerCase().includes(q);
  });

  const filteredEmojis = emojiEntries.filter((item) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return item.name.toLowerCase().includes(q) || item.keywords.toLowerCase().includes(q);
  });

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm select-none"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.15 }}
          className="w-full max-w-lg bg-[#0e121b] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[80vh] overflow-hidden"
        >
          <h2 id={titleId} className="sr-only">
            Choose an icon or emoji
          </h2>

          {/* Header */}
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            {/* Tab switch */}
            <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/5">
              <button
                type="button"
                onClick={() => setTab('Icon')}
                aria-pressed={tab === 'Icon'}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  tab === 'Icon' ? 'bg-blue-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Icons
              </button>
              <button
                type="button"
                onClick={() => setTab('Emoji')}
                aria-pressed={tab === 'Emoji'}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  tab === 'Emoji' ? 'bg-blue-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Emojis
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close icon picker"
              className="p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-white/[0.04] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Clean Search Input (No placeholder text per user constraint) */}
          <div className="px-4 py-3 border-b border-white/5 bg-[#0a0d14]">
            <div className="relative">
              <Search
                className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                aria-hidden="true"
              />
              <input
                ref={searchRef}
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search icons and emojis"
                placeholder="Search icons and emojis"
                className="w-full bg-[#151924] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-transparent focus:outline-none focus:border-blue-500/50"
              />
            </div>
          </div>

          {/* Grid View */}
          <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
            {isLoading || !lucideModule ? (
              <div className="flex flex-col items-center justify-center py-12 text-neutral-400 text-xs">
                <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
                Loading glyph database...
              </div>
            ) : tab === 'Icon' ? (
              <div className="grid grid-cols-6 gap-2">
                {filteredIcons.map((item) => {
                  const IconComp = lucideModule?.[item.name] ?? Sparkles;
                  return (
                  <button
                    key={item.id}
                    onClick={() => onSelectIcon(item.name)}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-blue-600 hover:text-white border border-white/5 flex flex-col items-center justify-center text-neutral-300 transition-all group"
                    title={item.name}
                  >
                    <IconComp className="w-5 h-5" />
                    <span className="text-[9px] font-mono mt-1.5 truncate max-w-full opacity-60 group-hover:opacity-100">
                      {item.name}
                    </span>
                  </button>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-6 gap-2">
                {filteredEmojis.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => onSelectEmoji(item.emoji)}
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-blue-600 hover:text-white border border-white/5 flex flex-col items-center justify-center text-2xl transition-all"
                    title={item.name}
                  >
                    <span>{item.emoji}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
