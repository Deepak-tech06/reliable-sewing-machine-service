import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
  variant?: 'pill' | 'segmented' | 'floating' | 'icon';
  showLabel?: boolean;
}

export default function ThemeToggle({
  className = '',
  variant = 'pill',
  showLabel = true,
}: ThemeToggleProps) {
  const { theme, setTheme, isDark, toggleTheme } = useTheme();

  // Segmented control: provides explicit choice between Light and Dark
  if (variant === 'segmented') {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-xl bg-muted border border-border/60 ${className}`}
        role="group"
        aria-label="Theme switcher"
      >
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
            !isDark
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          aria-pressed={!isDark}
        >
          <Sun className={`w-4 h-4 ${!isDark ? 'text-amber-500' : ''}`} />
          <span>Light</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
            isDark
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          aria-pressed={isDark}
        >
          <Moon className={`w-4 h-4 ${isDark ? 'text-primary' : ''}`} />
          <span>Dark</span>
        </button>
      </div>
    );
  }

  // Floating quick toggle button fixed at bottom-left corner
  if (variant === 'floating') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-background/90 hover:bg-background text-foreground border border-border/80 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
        aria-label={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
        title={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:-rotate-12 transition-transform duration-300" />
          )}
        </div>
        <span className="text-xs font-semibold tracking-wide">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>
    );
  }

  // Icon only
  if (variant === 'icon') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`relative inline-flex items-center justify-center p-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-accent/80 transition-all duration-200 border border-border/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
        aria-label={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
        title={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 -rotate-12 hover:rotate-0" />
        )}
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  // Pill variant (default): Shows icon + theme name, highly visible & intuitive
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-border/70 bg-card hover:bg-accent/80 text-foreground transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      aria-label={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
      title={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 text-amber-400 animate-in fade-in duration-200" />
          {showLabel && <span>Light</span>}
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-slate-700 animate-in fade-in duration-200" />
          {showLabel && <span>Dark</span>}
        </>
      )}
    </button>
  );
}
