import type { ComponentType, SVGProps } from 'react';

export type NavIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type NavItem = {
  label: string;
  href: string;
  isActive?: boolean;
  icon?: NavIcon;
  isLive?: boolean;
  linkExternal?: boolean;
};

export type NavSection = {
  title?: string;
  items: NavItem[];
  linkExternal?: boolean;
};
