'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FC } from 'react';
import Link from 'next/link';

interface DropdownProps {
  label: string;
  items: { name: string; href: string }[];
}

const Dropdown: FC<DropdownProps> = ({ label, items }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="text-gray-700 font-medium cursor-pointer focus:outline-none">
        {label}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="mt-2 bg-white border shadow-lg rounded px-2 py-1 min-w-[150px] z-50">
        {items.map((item) => (
          <DropdownMenu.Item key={item.href} className="py-2 px-4 hover:bg-gray-100">
            <Link href={item.href}>{item.name}</Link>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
