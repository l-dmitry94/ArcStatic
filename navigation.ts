import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ua'] as const;

export const { Link, useRouter } = createSharedPathnamesNavigation({ locales });
