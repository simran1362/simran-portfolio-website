import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-black text-white border-2 border-black hover:-translate-y-0.5 hover:shadow-card dark:bg-white dark:text-black dark:border-white',
        outline:
          'border-2 border-black bg-white text-black hover:-translate-y-0.5 hover:shadow-card dark:border-white dark:bg-transparent dark:text-white',
        accent:
          'bg-accent text-black border-2 border-accent hover:-translate-y-0.5 hover:shadow-glow hover:bg-accent-glow hover:border-accent-glow',
        ghost:
          'text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10',
        link: 'text-black underline-offset-4 hover:underline dark:text-white',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4',
        lg: 'h-12 px-8 py-3 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
