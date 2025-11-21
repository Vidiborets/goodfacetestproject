import { LocationSelect } from './LocationSelect';
import { QuantitySection } from './QuantitySection';
import { SubscriptionCycle } from './SubscriptionCycle';
import Logo from '@/src/features/dashboard/assets/images/Logo.png';
import Image from 'next/image';

const DashBoard = () => {
  return (
    <div className="bg-white rounded-xl border border-grey-200 shadow-sm p-6">
      <div className="flex items-start gap-4 mb-6">
        <Image
          width={56}
          height={56}
          className="rounded-sm bg-brand-50 border border-brand-100"
          src={Logo}
          alt="Logo"
        />
        <div>
          <h4 className="mb-1 font-medium">Datacenter Proxies</h4>
          <p className="text-sm text-grey-500 font-medium">
            High-speed, reliable proxies sourced from data centers, ideal for managing high-volume,
            concurrent requests.
          </p>
        </div>
      </div>

      <QuantitySection />

      <SubscriptionCycle />

      <LocationSelect />
    </div>
  );
};
export default DashBoard;
