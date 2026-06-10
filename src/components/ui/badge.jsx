import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors select-none',
  {
    variants: {
      variant: {
        default: 'bg-black/5 text-black/70 dark:bg-white/10 dark:text-white/80',
        solid: 'bg-black text-white dark:bg-white dark:text-black',
        accent: 'bg-accent text-black',
        outline:
          'border border-black/15 text-black/70 dark:border-white/20 dark:text-white/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
