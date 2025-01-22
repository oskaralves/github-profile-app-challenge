'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function HeaderNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentParams = searchParams.toString();
  const paramsString = currentParams ? `?${currentParams}` : '';

  const nav = [
    { label: 'Option 1', description: 'React Query + Axios (CSR)', href: '/' },
    {
      label: 'Option 2',
      description: 'Server Actions + Fetch + Suspense (SSR)',
      href: '/option-2',
    },
  ];

  return (
    <header className="flex w-full items-center px-4">
      <nav className="flex gap-4">
        {nav.map(({ label, description, href }) => (
          <Link
            key={href}
            href={`${href}${paramsString}`}
            className={cn(
              'relative flex flex-col items-start justify-center rounded-tl-md rounded-tr-md px-6 py-2 text-lg font-medium text-gray-900 opacity-40 transition-all duration-300',
              {
                'z-10 bg-background opacity-100': pathname === href,
              }
            )}
          >
            <strong>{label}</strong>
            <span className="text-sm opacity-80">{description}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
