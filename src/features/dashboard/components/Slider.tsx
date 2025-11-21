'use client';

import { Slider as UiSlider } from '@/components/ui/slider';

type Props = {
  value: number;
  onChange: (v: number) => void;
};

const MIN = 10;
const MAX = 1000;

export const Slider = ({ value, onChange }: Props) => {
  const ticks = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  return (
    <div className="space-y-3">
      <UiSlider
        min={MIN}
        max={MAX}
        step={10}
        value={[value]}
        onValueChange={(val) => onChange(val[0] ?? value)}
        className="w-full"
        thumbLabel={`${value} IP`}
      />

      <div className="flex justify-between text-[12px] tracking-[-0.2px] xl:text-sm xl:tracking-normal text-grey-500">
        {ticks.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
    </div>
  );
};
