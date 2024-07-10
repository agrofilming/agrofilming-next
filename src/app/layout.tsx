import '../styles/globals.scss';

import type { Metadata } from 'next';

import { TagCarousel } from '@/components/TagCarousel';
import { Footer } from '@/containers/Footer';
import { Header } from '@/containers/Header';

import { alegreyaSansSC } from './fonts';
import { LeadSeeker } from '@/components/LeadSeaker';
import { MailIcon } from '@/assets/icons/mailIcon';
import { PhoneIcon } from '@/assets/icons/phoneIcon';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Відео для агробізнесу',
  description:
    'Створюємо сочні відео для агробізнесу, спеціалізуємось на агротематиці та живемо в полях. Кайфовий відеопродакшн повного циклу, від ідеї до продадаючих відео лише один крок - написати нам.',

  openGraph: {
    title: 'Відео для агробізнесу',
    description:
      'Створюємо сочні відео для агробізнесу, спеціалізуємось на агротематиці та живемо в полях. Кайфовий відеопродакшн повного циклу, від ідеї до продадаючих відео лише один крок - написати нам.',
  },
  verification: {
    google: 'n-aaGMbxmCoJZMr_Czsf6zhvNJHD3i30BXLFMwbEVps',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alegreyaSansSC.className}>
      <body>
        <Header />
        <main>{children}</main>
        <TagCarousel />
        <Link href="mailto:producer@agrofilming.com">
          <LeadSeeker
            colorMain={'#1C9E00'}
            colorWithOpacity={'#1C9E0080'}
            containerBottom={'120px'}
            className={'green-seeker'}
          >
            <MailIcon />
          </LeadSeeker>
        </Link>
        <Link href="tel:+380688880710">
          <LeadSeeker
            colorMain={'#2196F3'}
            colorWithOpacity={'#2196F380'}
            containerBottom={'50px'}
            className={'green-seeker'}
          >
            <PhoneIcon />
          </LeadSeeker>
        </Link>
        <Footer />
      </body>
    </html>
  );
}
