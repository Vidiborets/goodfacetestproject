'use client';

import { observer } from 'mobx-react-lite';
import { useOrderStore } from '@/src/context/AppContext';
import IconChecked from '@/src/features/dashboard/assets/icons/checked.svg';
import IconDefault from '@/src/features/dashboard/assets/icons/default-checked.svg';

const PLANS = [
  { id: '1', label: '1 month' },
  { id: '3', label: '3 months' },
  { id: '12', label: '12 months', badge: 'Save 20%' },
] as const;

export const SubscriptionCycle = observer(() => {
  const model = useOrderStore();
  const { setPlan } = model;

  const baseButtonClasses =
    'flex w-full items-center rounded-sm px-3 py-3 text-left text-sm transition-colors';

  return (
    <section className="mb-6 space-y-1">
      <h3 className="text-sm font-semibold text-grey-900">Select subscription cycle</h3>

      <div className="space-y-2">
        {PLANS.map((plan) => {
          const isSelected = model.plan === plan.id;

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => setPlan(plan.id)}
              className={
                isSelected
                  ? `${baseButtonClasses} border border-brand-400 bg-brand-50`
                  : `${baseButtonClasses} border border-grey-200 bg-white hover:border-[#9DA4AE]`
              }
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-4 w-4 items-center justify-center">
                  {isSelected ? (
                    <IconChecked className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <IconDefault className="h-4 w-4" aria-hidden="true" />
                  )}
                </span>
                <span className="text-body-1 font-medium text-grey-800">{plan.label}</span>
              </div>

              {'badge' in plan && (
                <span className="ml-2 inline-flex items-center rounded-sm border border-green-300 bg-green-50 px-1.5 text-caption font-medium text-green-700">
                  {plan.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
});
