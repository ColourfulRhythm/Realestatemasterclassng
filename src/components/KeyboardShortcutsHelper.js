import React from 'react';

/**
 * KeyboardShortcutsHelper Component
 * Displays available keyboard shortcuts
 */
function KeyboardShortcutsHelper() {
  return (
    <div 
      className="fixed bottom-20 left-4 text-white/60 text-xs select-none hidden md:block"
      aria-hidden="true"
    >
      <div className="space-y-1 bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10">
        <p className="font-semibold text-white/80 mb-2">Keyboard Shortcuts:</p>
        <p>← → Space: Navigate</p>
        <p>Home / End: First / Last</p>
        <p>F: Fullscreen</p>
        <p>1-9: Jump to slide</p>
        <p>Esc: Exit fullscreen</p>
      </div>
    </div>
  );
}

export default KeyboardShortcutsHelper;

