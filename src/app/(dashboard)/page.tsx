import OrderSummaryCard from '@/src/features/bill/components/OrderSummaryCard';
import DashBoard from '@/src/features/dashboard/components/DashBoard';
import IconChevronLeft from '@/src/assets/icons/chevron-left.svg';

const DatacenterProxiesPage = () => {
  return (
    <div className="w-full">
      {/* Back Button */}
      <div className="mb-4 inline-flex w-full">
        <button className="inline-flex items-center gap-1 rounded-sm border border-grey-300 bg-white px-3 py-1 text-button text-grey-800 hover:bg-grey-50">
          <IconChevronLeft className="size-4 text-grey-800" aria-hidden="true" />
          Back to all
        </button>
      </div>

      {/* Dashboard + Bill */}
      <div className="flex w-full flex-col gap-6 xl:flex-row">
        <section className="w-full flex-1 xl:min-w-[360px]">
          <DashBoard />
        </section>

        {/* Bill */}
        <aside className="w-full xl:w-[360px] xl:shrink-0">
          <OrderSummaryCard />
        </aside>
      </div>
    </div>
  );
};

export default DatacenterProxiesPage;
