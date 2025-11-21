'use client';

import { useState, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { DiscountTable } from './DiscountTable';
import { Slider } from './Slider';
import IconEdit from '@/src/features/dashboard/assets/icons/edit.svg';
import { useOrderStore } from '@/src/context/AppContext';

export const QuantitySection = observer(() => {
  const model = useOrderStore();
  const { setQuantity, quantity } = model;
  const [useCustomInput, setUseCustomInput] = useState(false);

  const toggleMode = () => setUseCustomInput((prev) => !prev);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;
    if (raw === '') {
      setQuantity(0);
      return;
    }

    const next = parseInt(raw, 10);
    if (Number.isNaN(next)) return;

    setQuantity(next);
  };

  return (
    <section className="mb-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-grey-800">Select number of IPs</h3>
            <p className="text-xs text-grey-500">
              Choose the perfect quantity of IPs for your needs effortlessly
            </p>
          </div>
        </div>
      </div>

      <DiscountTable useCustomInput={useCustomInput} />

      {!useCustomInput && <Slider value={quantity} onChange={setQuantity} />}

      {useCustomInput && (
        <div>
          <span className="mb-1 font-bold text-sm text-grey-800">Custom quantity</span>
          <input
            type="number"
            min={10}
            max={1000}
            value={quantity || 0}
            onChange={handleInputChange}
            className="h-10 w-full rounded-sm border border-[#D2D6DB] px-3 py-2 text-sm text-grey-900 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-200"
            placeholder="Enter number of IPs"
          />
        </div>
      )}

      <button
        type="button"
        onClick={toggleMode}
        className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-brand-600 hover:text-brand-700 border border-gray-300 px-4 py-1.5 rounded-sm hover:bg-gray-100 transition"
      >
        <span className="text-sm font-bold decoration-brand-300 underline-offset-2">
          {useCustomInput ? (
            'Select from the range'
          ) : (
            <div className="flex items-center gap-1">
              <IconEdit className="w-4 h-4 text-brand-500" />
              Enter a custom quantity
            </div>
          )}
        </span>
      </button>
    </section>
  );
});

// ('use client');

// import { useState } from 'react';
// import { observer } from 'mobx-react-lite';

// import { DiscountTable } from './DiscountTable';
// import { Slider } from './Slider';
// import { useOrderStore } from '@/src/stores/orderStoreContext';

// export const QuantitySection = observer(() => {
//   const store = useOrderStore();
//   const [showSlider, setShowSlider] = useState(true);

//   const toggleSlider = () => setShowSlider((prev) => !prev);

//   return (
//     <section className="mb-6">
//       <div className="flex flex-col gap-2">
//         <div className="mb-6">
//           <h3 className="text-sm font-medium text-grey-800">Select number of IPs</h3>
//           <p className="text-xs text-grey-500">
//             Choose the perfect quantity of IPs for your needs effortlessly
//           </p>
//         </div>
//       </div>

//       <DiscountTable />

//       {showSlider && <Slider value={store.quantity} onChange={store.setQuantity} />}

//       <button
//         type="button"
//         onClick={toggleSlider}
//         className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-brand-600 hover:text-brand-700"
//       >
//         <span className="underline decoration-brand-300 underline-offset-2">
//           Enter a custom quantity
//         </span>
//       </button>
//     </section>
//   );
// });
