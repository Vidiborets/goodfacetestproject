'use client';

import { observer } from 'mobx-react-lite';
import { useOrderStore } from '@/src/context/AppContext';
import IconCheckFilled from '@/src/features/bill/assets/icons/circle-check-filled.svg';
import IconMasterCard from '@/src/features/bill/assets/icons/master-card.svg';
import IconVisa from '@/src/features/bill/assets/icons/visa.svg';
import IconAmericaExpress from '@/src/features/bill/assets/icons/american-express.svg';
import IconAmex from '@/src/features/bill/assets/icons/amex.svg';
import IconUnionPay from '@/src/features/bill/assets/icons/union-pay.svg';

const OrderSummaryCard = observer(() => {
  const model = useOrderStore();
  const { quantity, pricePerIp, total, subscriptionLabel, locationLabel } = model;

  return (
    <>
      <section className="bg-white rounded-xl border border-grey-200 shadow-sm p-6 flex flex-col gap-4">
        <h5 className="text-grey-900">Order summary</h5>

        <div className="space-y-2">
          <div className="text-body-1 font-medium text-grey-900">Datacenter Proxies</div>

          <ul className="space-y-2 text-grey-700">
            <li className="flex items-center gap-2">
              <IconCheckFilled className="size-5 text-green-600" aria-hidden="true" />
              <span className="text-subtitle-2 font-medium text-grey-600">3-day Trial</span>
            </li>
            <li className="flex items-center gap-2">
              <IconCheckFilled className="size-5 text-green-600" aria-hidden="true" />
              <span className="text-subtitle-2 font-medium text-grey-600">
                Customer Success Manager
              </span>
            </li>
          </ul>
        </div>

        <dl className="space-y-2 text-subtitle-2 text-grey-600 font-medium">
          <div className="flex justify-between">
            <dt>Quantity of IP</dt>
            <dd className="text-grey-800">{quantity} IPs</dd>
          </div>
          <div className="flex justify-between">
            <dt>Location</dt>
            <dd className="text-grey-800">{locationLabel}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Price per IP</dt>
            <dd className="text-grey-800">${pricePerIp.toFixed(2)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Subscription period</dt>
            <dd className="text-grey-800">{subscriptionLabel}</dd>
          </div>
        </dl>

        <div className="mt-3 flex gap-2">
          <input
            type="text"
            placeholder="Add discount code"
            className="flex-1 rounded-sm border border-grey-300 px-3 py-1 text-sm font-medium placeholder:text-grey-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
          <button className="rounded-sm border border-grey-300 px-3 py-1 text-sm font-semibold text-grey-800 hover:bg-grey-100">
            Apply
          </button>
        </div>
        <div className="border-t border-grey-300 " />

        <div className="flex items-center justify-between">
          <span className="text-sm text-grey-950 font-medium">Total</span>
          <span className="text-2xl font-medium text-grey-800">${total.toFixed(2)}</span>
        </div>
      </section>

      <button className="mt-4 w-full rounded-sm bg-brand-500 text-white text-body-1 font-bold py-2 hover:bg-brand-600 transition">
        Continue to checkout
      </button>
      <div className="mt-4 flex align-center justify-center text-xs text-grey-400">
        <IconVisa className="w-10 h-6" />
        <IconMasterCard className="w-10 h-6" />
        <IconAmex className="w-10 h-6" />
        <IconAmericaExpress className="w-10 h-6" />
        <IconUnionPay className="w-10 h-6" />
      </div>
    </>
  );
});

export default OrderSummaryCard;
