'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';
import IconDrag from '@/src/assets/icons/drag.svg';
import IconShape from '@/src/assets/icons/shape.svg';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  thumbLabel?: React.ReactNode;
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, thumbLabel, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-grey-100">
        <SliderPrimitive.Range className="absolute h-full bg-brand-500" />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb
        className={cn(
          'relative block h-6 w-6 rounded-xl border border-brand-500 bg-white shadow-md',
          'flex items-center justify-center',
          'outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0',
          '[-webkit-tap-highlight-color:transparent]',
        )}
      >
        {thumbLabel && (
          <div className="pointer-events-none absolute top-[-40.8px] left-1/2 flex -translate-x-1/2 flex-col items-center">
            <IconShape className="w-10 h-16 text-white" />
            <div className="flex bg-brand-500 px-2 py-1 rounded-sm  font-medium text-body-1 w-[75px] justify-center text-white absolute top-0">
              {thumbLabel}
            </div>
          </div>
        )}

        <span className="flex gap-2 relative z-50">
          <IconDrag className="size-[22px] text-grey-400" aria-hidden="true" />
        </span>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  ),
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
