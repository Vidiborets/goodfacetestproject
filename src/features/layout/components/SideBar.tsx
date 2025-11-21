'use client';

import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { bottomNav, mainNav } from '../stores';
import BellIcon from '@/src/features/layout/assets/icons/bell.svg';
import IconSignal from '@/src/features/layout/assets/icons/signal.svg';
import IconDotVertical from '@/src/features/layout/assets/icons/dots-vertical.svg';
import IconBurger from '@/src/features/layout/assets/icons/menu-2.svg';
import IconChevronRight from '@/src/features/layout/assets/icons/chevron-right.svg';

const SidebarInner = () => (
  <div className="flex h-full flex-col bg-white">
    <div className="px-4 pt-2.5 pb-2">
      <div className="mb-2.5 flex items-center justify-between">
        <div className="flex h-8 w-[58px] items-center justify-center rounded-md text-[24px] font-medium text-grey-800">
          Logo
        </div>

        <div className="relative">
          <BellIcon className="size-5 text-grey-600" aria-hidden="true" />
          <span className="absolute -right-2 -top-1 flex h-4 w-5 items-center justify-center rounded-full bg-brand-400 text-[12px] font-medium text-white outline-1 outline-white">
            2
          </span>
        </div>
      </div>

      <button className="mt-4 inline-flex w-full items-center justify-center rounded-sm border border-grey-300 py-1 text-sm font-semibold text-grey-800 hover:bg-grey-300 transition">
        + Buy new proxies
      </button>
    </div>

    <nav className="space-y-4 px-4 py-4 text-sm">
      {mainNav.map((section, index) => (
        <div key={index}>
          {section.title && (
            <div className="mb-1 px-4 text-overline font-medium uppercase tracking-[0.08em] text-grey-700">
              {section.title}
            </div>
          )}

          <ul className="space-y-0">
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={classNames(
                      'flex h-7 items-center gap-4 rounded-sm px-3 leading-7 transition',
                      item.isActive ? 'bg-brand-50 text-brand-500' : 'hover:bg-grey-100',
                    )}
                  >
                    {Icon ? (
                      <Icon
                        className={classNames(
                          'size-5',
                          item.isActive ? 'text-brand-500' : 'text-grey-800',
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="h-4 w-4 rounded-md text-grey-800" />
                    )}
                    <span
                      className={classNames(
                        'text-subtitle-2 font-medium',
                        item.isActive ? 'text-brand-500' : 'text-grey-800',
                      )}
                    >
                      {item.label}
                    </span>
                    {item.isLive && (
                      <IconSignal className="ml-auto size-5 text-green-950" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>

    {/*  Billing / Help + user */}
    <div className="flex-1 space-y-4 px-4 text-sm">
      <div className="mt-[5.5px] mb-[5.5px] border-t border-grey-200" />
      {bottomNav.map((section, index) => (
        <ul key={index} className="mt-4 space-y-0">
          {section.items.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex h-7 items-center gap-4 rounded-lg px-3 leading-7 text-grey-800 hover:bg-grey-100 transition"
                >
                  {Icon ? (
                    <Icon className="size-5 text-grey-800" aria-hidden="true" />
                  ) : (
                    <span className="h-4 w-4" />
                  )}
                  <span className="text-subtitle-2 font-medium text-grey-800">{item.label}</span>
                  {item.linkExternal && (
                    <IconChevronRight className="ml-auto size-5 text-grey-800" aria-hidden="true" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      ))}
    </div>

    <div className="border-t border-grey-200 px-3 py-4 text-sm">
      {/* User mini-profile */}
      <div className="flex cursor-pointer items-center justify-between rounded-lg px-3 hover:bg-grey-100">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-subtitle-2 font-medium text-grey-800">Henry Smith</span>
            <span className="text-subtitle-2 font-medium text-grey-600">henry.smith@gmail.com</span>
          </div>
        </div>
        <IconDotVertical className="text-grey-600" />
      </div>
    </div>
  </div>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between border-b border-grey-200 bg-white px-4 py-3 md:hidden">
        <div className="text-[24px] font-medium text-grey-800">Logo</div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <BellIcon className="size-5 text-grey-600" aria-hidden="true" />
            <span className="absolute -right-2 -top-1 flex h-4 w-5 items-center justify-center rounded-full bg-brand-400 text-[12px] font-medium text-white outline-1 outline-white">
              2
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex flex-col gap-1 rounded-sm border border-grey-300 bg-white px-2 py-1 text-grey-800"
            aria-label="Open navigation"
          >
            <IconBurger className="size-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className={classNames(
          'fixed inset-y-0 left-0 z-40 w-[280px] bg-white shadow-lg transition-transform duration-200 md:hidden border-r border-grey-200',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-grey-200 px-4 py-3">
          <div className="text-[24px] font-medium text-grey-800">Logo</div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-sm p-1 text-grey-600 hover:bg-grey-100"
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>
        <SidebarInner />
      </div>

      <aside className="hidden shrink-0 border-r border-grey-200 bg-white md:flex">
        <SidebarInner />
      </aside>
    </>
  );
};

export default Sidebar;
