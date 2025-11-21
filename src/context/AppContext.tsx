'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { Model } from '../stores/Model';

const OrderStoreContext = createContext<Model | null>(null);

export const OrderStoreProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(() => new Model());

  return <OrderStoreContext.Provider value={store}>{children}</OrderStoreContext.Provider>;
};

export const useOrderStore = () => {
  const ctx = useContext(OrderStoreContext);
  if (!ctx) {
    throw new Error('useOrderStore must be used within OrderStoreProvider');
  }
  return ctx;
};
