import React from 'react';
import { cn } from '../../lib/utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'flex w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none transition-colors',
      'focus:border-accent focus:ring-2 focus:ring-accent/30',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'dark:border-white/15 dark:bg-surface-darkAlt2 dark:text-white dark:placeholder:text-white/40',
      className,
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export { Textarea };
