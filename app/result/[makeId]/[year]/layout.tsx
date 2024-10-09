import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Loader } from '~/app/components/components';

export const metadata: Metadata = {
  title: 'Car Dealer',
  description: 'car picking application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
