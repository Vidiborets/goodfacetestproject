import type { NavSection } from '../types/index';
import IconDashboard from '../assets/icons/layout-dashboard.svg';
import IconObservability from '../assets/icons/eye.svg';
import IconMonitor from '../assets/icons/monitor.svg';
import IconSelectAll from '../assets/icons/select-all.svg';
import IconClipBoardList from '../assets/icons/clipboard-list.svg';
import IconUsers from '../assets/icons/users.svg';
import IconBasket from '../assets/icons/basket.svg';
import IconKey from '../assets/icons/key.svg';
import IconCodeCircle from '../assets/icons/code-circle-2.svg';
import IconCoin from '../assets/icons/coin.svg';
import IconNewUser from '../assets/icons/new-user.svg';
import IconReceipt from '../assets/icons/receipt-2.svg';
import IconHelpCircle from '../assets/icons/help-circle.svg';

export const mainNav: NavSection[] = [
  {
    title: '',
    items: [{ label: 'Dashboard', href: '#', icon: IconDashboard }],
  },
  {
    title: 'System overview',
    items: [
      { label: 'Observability Overview', href: '#', icon: IconObservability },
      { label: 'Live Log Monitor', href: '#', icon: IconMonitor, isLive: true },
    ],
  },
  {
    title: 'My services',
    items: [
      { label: 'Summary', href: '#', icon: IconSelectAll },
      { label: 'Proxy List', href: '#', icon: IconClipBoardList },
      { label: 'User Settings', href: '#', icon: IconUsers },
      { label: 'All Products', href: '#', isActive: true, icon: IconBasket },
    ],
  },
  {
    title: 'Developer section',
    items: [
      { label: 'API Keys', href: '#', icon: IconKey },
      { label: 'API Requests', href: '#', icon: IconCodeCircle },
    ],
  },
  {
    title: 'Affiliate programs',
    items: [
      { label: 'Resellers Statistics', href: '#', icon: IconCoin },
      { label: 'Affiliate Program', href: '#', icon: IconNewUser },
    ],
  },
];

export const bottomNav: NavSection[] = [
  {
    items: [
      { label: 'Billing', href: '#', icon: IconReceipt, linkExternal: true },
      { label: 'Help', href: '#', icon: IconHelpCircle, linkExternal: true },
    ],
  },
];
