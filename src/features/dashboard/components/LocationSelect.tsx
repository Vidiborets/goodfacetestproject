'use client';

import { observer } from 'mobx-react-lite';
import { useOrderStore } from '@/src/context/AppContext';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import IconChevronDown from '@/src/features/dashboard/assets/icons/chevron-down.svg';
import { LOCATIONS } from '@/src/features/dashboard/lib/locationArray';
import IconPlaceholder from '@/src/features/dashboard/assets/icons/placeholder.svg';

type LocationValue = (typeof LOCATIONS)[number]['value'];

export const LocationSelect = observer(() => {
  const model = useOrderStore();
  const { location, setLocation } = model;
  const current = LOCATIONS.find((l) => l.value === location) ?? LOCATIONS[0];

  return (
    <section className="space-y-1">
      <h3 className="text-sm font-semibold text-grey-900">Select location</h3>

      <Select value={location} onValueChange={(v) => setLocation(v as LocationValue)}>
        <SelectTrigger
          className="
            group flex h-10 w-full items-center justify-between
            rounded-sm border border-grey-200 bg-white px-3
            text-sm text-grey-800
            focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-500
            data-[state=open]:border-brand-500
          "
        >
          <div className="flex items-center gap-2 overflow-hidden">
            {current ? (
              <>
                <span className="inline-flex h-5 w-5 items-center justify-center overflow-hidden rounded-sm bg-grey-100">
                  {current.flag}
                </span>
                <span className="truncate">{current.label}</span>
              </>
            ) : (
              <>
                {/* сюда можно вставить IconGlobe */}
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-grey-100 text-[12px]">
                  {<IconPlaceholder />}
                </span>
                <span className="text-grey-400">Select</span>
              </>
            )}
          </div>

          <IconChevronDown
            className="
              h-4 w-4 text-grey-500
              transition-transform duration-150
              group-data-[state=open]:rotate-180
            "
            aria-hidden="true"
          />
        </SelectTrigger>

        <SelectContent className="rounded-md border border-grey-200 bg-white text-sm">
          {LOCATIONS.map((loc) => (
            <SelectItem
              key={loc.value}
              value={loc.value}
              className="
                flex cursor-pointer items-center gap-2 px-3 py-2
                text-grey-800
                data-[state=checked]:bg-brand-50 data-[state=checked]:text-grey-900
              "
            >
              <span className="inline-flex h-5 w-5 items-center justify-center overflow-hidden rounded-sm bg-grey-100">
                {loc.flag}
              </span>
              <span>{loc.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
});
