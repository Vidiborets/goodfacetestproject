'use client';

import Sidebar from '@/src/features/layout/components/SideBar';
import { OrderStoreProvider } from '@/src/context/AppContext';
import type { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-grey-50 text-grey-900">
      <Sidebar />

      <OrderStoreProvider>
        <main className="flex-1 px-4 py-4 md:px-12 md:py-6">{children}</main>
      </OrderStoreProvider>
    </div>
  );
};

export default DashboardLayout;
