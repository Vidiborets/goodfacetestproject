'use client';
import { useState } from 'react';
import IconChevronUp from '@/src/features/dashboard/assets/icons/chevron-up.svg';
import classNames from 'classnames';

export const DiscountTable = ({ useCustomInput }: { useCustomInput: boolean }) => {
  const [showed, setShowed] = useState(true);
  const toggleShowed = () => setShowed(!showed);
  return (
    <div
      className={classNames('overflow-hidden', {
        'mb-4': useCustomInput,
        'mb-16': !useCustomInput,
      })}
    >
      <button onClick={toggleShowed} className="cursor-pointer flex mb-2 items-center">
        <span className="text-sm font-medium text-grey-800">Bundle discounts</span>
        <IconChevronUp
          className={`ml-1 h-5 w-5 transition-transform ${showed ? 'rotate-0' : 'rotate-180'}`}
        />
      </button>
      {showed && (
        <div className="rounded-sm border border-grey-200">
          <div className="grid grid-cols-5 border-b border-grey-200 bg-grey-50 py-2 px-3 text-sm font-medium text-grey-500">
            <span className="text-left">IPs</span>
            <span className="text-right">10–24</span>
            <span className="text-right">25–49</span>
            <span className="text-right">50–99</span>
            <span className="text-right">100+</span>
          </div>

          <div className="grid grid-cols-5 px-3 py-2 text-sm text-grey-950 letter-spacing-[-0.2px]">
            <span className="text-left truncate">Price per IP</span>
            <span className="text-right">$3.00</span>
            <span className="text-right">$2.75</span>
            <span className="text-right">$2.50</span>
            <span className="text-right">$2.25</span>
          </div>
        </div>
      )}
    </div>
  );
};
