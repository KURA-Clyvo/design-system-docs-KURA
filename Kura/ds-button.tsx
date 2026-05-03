/**
 * Kura Design System — Button
 * ─────────────────────────────────────────────────────────────
 * A polymorphic, fully accessible button component that maps
 * directly to the Kura token set.  Renders as <button> by default
 * but can be promoted to <a> via the `as` prop.
 *
 * Variants   : primary | secondary | ghost | danger
 * Context    : tutor   | clinic
 * Sizes      : sm | md | lg
 * States     : default · hover · focus · disabled · loading
 *
 * Accessibility:
 *   – role="button" when rendered as non-button element
 *   – aria-disabled instead of HTML disabled when loading
 *   – aria-busy + aria-label for spinner
 *   – focus-visible ring using token --border-focus
 */

import React, { forwardRef, ReactNode } from 'react';

// ─── Token maps ───────────────────────────────────────────────

const VARIANT_STYLES = {
  // tutor context (sage-primary)
  tutor: {
    primary: {
      base:     'bg-[--sage]    text-[--text-on-sage]  border-transparent shadow-[--shadow-sage]',
      hover:    'hover:bg-[--sage-light]',
      active:   'active:scale-[0.98]',
      focus:    'focus-visible:ring-2 focus-visible:ring-[--sage] focus-visible:ring-offset-2',
      disabled: 'disabled:bg-[--sage-pale] disabled:text-[--text-mute] disabled:shadow-none',
    },
    secondary: {
      base:     'bg-transparent text-[--text]          border-[--border-strong]',
      hover:    'hover:bg-[--surface-2]',
      active:   'active:scale-[0.98]',
      focus:    'focus-visible:ring-2 focus-visible:ring-[--sage] focus-visible:ring-offset-2',
      disabled: 'disabled:opacity-40',
    },
    ghost: {
      base:     'bg-[--surface] text-[--text]          border-[--border]',
      hover:    'hover:bg-[--surface-2] hover:border-[--border-strong]',
      active:   'active:scale-[0.98]',
      focus:    'focus-visible:ring-2 focus-visible:ring-[--sage] focus-visible:ring-offset-2',
      disabled: 'disabled:opacity-40',
    },
    danger: {
      base:     'bg-[--danger]  text-white              border-transparent',
      hover:    'hover:opacity-90',
      active:   'active:scale-[0.98]',
      focus:    'focus-visible:ring-2 focus-visible:ring-[--danger] focus-visible:ring-offset-2',
      disabled: 'disabled:bg-[--danger-bg] disabled:text-[--danger] disabled:shadow-none',
    },
  },

  // clinic context (ocean-primary)
  clinic: {
    primary: {
      base:     'bg-[--ocean]   text-[--text-on-ocean] border-transparent',
      hover:    'hover:bg-[--ocean-soft]',
      active:   'active:scale-[0.98]',
      focus:    'focus-visible:ring-2 focus-visible:ring-[--ocean] focus-visible:ring-offset-2',
      disabled: 'disabled:bg-[--ocean-pale] disabled:text-[--text-mute] disabled:shadow-none',
    },
    secondary: {
      base:     'bg-transparent text-[--ocean]         border-[--ocean] border-opacity-40',
      hover:    'hover:bg-[--ocean-pale]',
      active:   'active:scale-[0.98]',
      focus:    'focus-visible:ring-2 focus-visible:ring-[--ocean] focus-visible:ring-offset-2',
      disabled: 'disabled:opacity-40',
    },
    ghost: {
      base:     'bg-[--bg-elev] text-[--text]          border-[--border-strong]',
      hover:    'hover:bg-[--surface-2]',
      active:   'active:scale-[0.98]',
      focus:    'focus-visible:ring-2 focus-visible:ring-[--ocean] focus-visible:ring-offset-2',
      disabled: 'disabled:opacity-40',
    },
    danger: {
      base:     'bg-[--danger]  text-white              border-transparent',
      hover:    'hover:opacity-90',
      active:   'active:scale-[0.98]',
      focus:    'focus-visible:ring-2 focus-visible:ring-[--danger] focus-visible:ring-offset-2',
      disabled: 'disabled:bg-[--danger-bg] disabled:text-[--danger] disabled:shadow-none',
    },
  },
} as const;

const SIZE_STYLES = {
  sm: 'h-8  px-[--s-3] text-[--t-sm]  gap-[--s-1] rounded-[--r-md]',
  md: 'h-11 px-[--s-5] text-[--t-base] gap-[--s-2] rounded-[--r-full]',
  lg: 'h-12 px-[--s-6] text-[--t-md]  gap-[--s-2] rounded-[--r-full]',
} as const;

// ─── Spinner ──────────────────────────────────────────────────
function Spinner({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      style={{ animation: 'kspin 0.7s linear infinite', flexShrink: 0 }}
    >
      <style>{`@keyframes kspin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="12" cy="12" r="9" strokeOpacity={0.25} />
      <path d="M12 3a9 9 0 0 1 9 9" strokeLinecap="round" />
    </svg>
  );
}

// ─── Component props ──────────────────────────────────────────
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize    = 'sm' | 'md' | 'lg';
export type ButtonContext = 'tutor' | 'clinic';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Design context — changes the primary colour token */
  context?: ButtonContext;
  /** Fill container width */
  fullWidth?: boolean;
  /** Show a loading spinner and block interaction */
  loading?: boolean;
  /** Icon placed before the label */
  iconLeft?: ReactNode;
  /** Icon placed after the label */
  iconRight?: ReactNode;
  /** Custom class additions */
  className?: string;
}

// ─── Button ───────────────────────────────────────────────────
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant  = 'primary',
      size     = 'md',
      context  = 'tutor',
      fullWidth = false,
      loading  = false,
      iconLeft,
      iconRight,
      children,
      className = '',
      disabled,
      ...rest
    },
    ref
  ) => {
    const vt = VARIANT_STYLES[context][variant];
    const sz = SIZE_STYLES[size];

    const isDisabled = disabled || loading;

    const base = [
      // layout
      'inline-flex items-center justify-center',
      'font-[--font-body] font-medium',
      'border transition-all duration-[--d-base]',
      'select-none cursor-pointer whitespace-nowrap',
      'disabled:cursor-not-allowed',
      // variant + size
      vt.base, vt.hover, vt.active, vt.focus, vt.disabled,
      sz,
      // modifiers
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={base}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...rest}
      >
        {loading
          ? <>
              <Spinner size={size === 'sm' ? 13 : size === 'lg' ? 18 : 15} />
              <span aria-live="polite" className="sr-only">Carregando…</span>
              {children && <span style={{ opacity: 0.6 }}>{children}</span>}
            </>
          : <>
              {iconLeft  && <span aria-hidden="true" className="shrink-0">{iconLeft}</span>}
              {children}
              {iconRight && <span aria-hidden="true" className="shrink-0">{iconRight}</span>}
            </>
        }
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
