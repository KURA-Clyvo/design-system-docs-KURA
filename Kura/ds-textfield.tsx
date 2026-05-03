/**
 * Kura Design System — TextField
 * ─────────────────────────────────────────────────────────────
 * A fully accessible, single-line text input with optional
 * leading/trailing slots, helper text, error state and character
 * count.  Maps directly to Kura design tokens.
 *
 * Variants   : default | filled
 * Context    : tutor   | clinic   (changes focus ring colour)
 * Sizes      : sm | md | lg
 * States     : default · hover · focus · disabled · error · success
 *
 * Accessibility:
 *   – <label> always rendered and associated via htmlFor / id
 *   – aria-describedby for helperText and errorText
 *   – aria-invalid when in error state
 *   – aria-required forwarded from required prop
 *   – role="status" on char count for screen readers
 */

import React, { forwardRef, useId, ReactNode } from 'react';

// ─── Token maps ───────────────────────────────────────────────
const CONTEXT_FOCUS = {
  tutor:  'focus:border-[--sage]   focus:ring-[--sage]   focus:ring-opacity-20',
  clinic: 'focus:border-[--ocean]  focus:ring-[--ocean]  focus:ring-opacity-20',
} as const;

const SIZE_MAP = {
  sm: {
    input:  'h-9  px-[--s-3] text-[--t-sm]',
    label:  'text-[--t-xs] mb-[--s-1]',
    helper: 'text-[--t-xs]',
  },
  md: {
    input:  'h-11 px-[--s-4] text-[--t-base]',
    label:  'text-[10px] mb-[--s-1]',
    helper: 'text-[--t-xs]',
  },
  lg: {
    input:  'h-14 px-[--s-5] text-[--t-md]',
    label:  'text-[11px] mb-[--s-1]',
    helper: 'text-[--t-sm]',
  },
} as const;

// ─── Sub-components ───────────────────────────────────────────
export type TextFieldSize    = 'sm' | 'md' | 'lg';
export type TextFieldContext = 'tutor' | 'clinic';
export type TextFieldVariant = 'default' | 'filled';

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visible label — always rendered for a11y */
  label: string;
  /** Design context — changes focus/active ring colour */
  context?: TextFieldContext;
  /** Visual style */
  variant?: TextFieldVariant;
  /** Size preset */
  size?: TextFieldSize;
  /** Small text below the field */
  helperText?: string;
  /** When set, puts field into error state and shows this message */
  errorText?: string;
  /** When set, shows a success-style border */
  success?: boolean;
  /** Icon/element placed inside the leading (left) slot */
  leadingSlot?: ReactNode;
  /** Icon/element placed inside the trailing (right) slot */
  trailingSlot?: ReactNode;
  /** If set, shows a character counter (requires maxLength) */
  showCharCount?: boolean;
  /** Hides the label visually but keeps it for screen readers */
  hideLabel?: boolean;
  /** Custom class additions for the wrapper */
  className?: string;
}

// ─── TextField ────────────────────────────────────────────────
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      context     = 'tutor',
      variant     = 'default',
      size        = 'md',
      helperText,
      errorText,
      success     = false,
      leadingSlot,
      trailingSlot,
      showCharCount = false,
      hideLabel   = false,
      className   = '',
      id: idProp,
      maxLength,
      value,
      defaultValue,
      required,
      disabled,
      ...rest
    },
    ref
  ) => {
    const autoId   = useId();
    const inputId  = idProp ?? `kura-tf-${autoId}`;
    const helpId   = `${inputId}-help`;
    const errorId  = `${inputId}-error`;

    const hasError   = Boolean(errorText);
    const describedBy = [
      helperText ? helpId  : '',
      hasError   ? errorId : '',
    ].filter(Boolean).join(' ') || undefined;

    // Determine border colour
    const borderState = hasError
      ? 'border-[--danger] ring-1 ring-[--danger] ring-opacity-30'
      : success
        ? 'border-[--success] ring-1 ring-[--success] ring-opacity-20'
        : '';

    const sz  = SIZE_MAP[size];
    const foc = CONTEXT_FOCUS[context];

    const bgVariant = variant === 'filled'
      ? 'bg-[--surface-2]'
      : 'bg-[--surface]';

    const inputClasses = [
      'w-full rounded-[--r-md] border border-[--border-strong]',
      'font-[--font-body] text-[--text] placeholder:text-[--text-mute]',
      'outline-none ring-0',
      'transition-all duration-[--d-fast]',
      'focus:ring-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      bgVariant,
      sz.input,
      foc,
      borderState,
      leadingSlot  ? 'pl-10' : '',
      trailingSlot ? 'pr-10' : '',
    ].filter(Boolean).join(' ');

    const labelClasses = [
      'block font-[--font-mono] font-medium tracking-[0.13em] uppercase',
      'text-[--text-mute]',
      sz.label,
      hideLabel ? 'sr-only' : '',
    ].filter(Boolean).join(' ');

    // Internal value tracking for charCount
    const [charCount, setCharCount] = React.useState<number>(() => {
      const v = value ?? defaultValue;
      return typeof v === 'string' ? v.length : 0;
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCharCount(e.target.value.length);
      rest.onChange?.(e);
    };

    return (
      <div className={`flex flex-col ${className}`}>
        {/* Label */}
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {required && (
            <span aria-hidden="true" className="ml-1 text-[--danger]">*</span>
          )}
        </label>

        {/* Input wrapper */}
        <div className="relative flex items-center">
          {/* Leading slot */}
          {leadingSlot && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-3 text-[--text-mute]"
            >
              {leadingSlot}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-invalid={hasError}
            aria-required={required}
            aria-describedby={describedBy}
            disabled={disabled}
            required={required}
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            {...rest}
          />

          {/* Trailing slot */}
          {trailingSlot && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-3 text-[--text-mute]"
            >
              {trailingSlot}
            </span>
          )}
        </div>

        {/* Footer row: helper/error + char count */}
        <div className="flex justify-between mt-1">
          <div className={sz.helper}>
            {hasError ? (
              <span id={errorId} role="alert" className="text-[--danger] font-medium">
                {errorText}
              </span>
            ) : helperText ? (
              <span id={helpId} className="text-[--text-mute]">
                {helperText}
              </span>
            ) : null}
          </div>
          {showCharCount && maxLength && (
            <span
              role="status"
              aria-live="polite"
              className={`${sz.helper} font-[--font-mono] tabular-nums text-[--text-mute] ml-auto`}
            >
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

TextField.displayName = 'TextField';
export default TextField;
