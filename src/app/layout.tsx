import '../styles/globals.scss';

import type { Metadata } from 'next';

import { TagCarousel } from '@/components/TagCarousel';
import { Footer } from '@/containers/Footer';
import { Header } from '@/containers/Header';

import { roboto } from './fonts';
import { LeadSeeker } from '@/components/LeadSeaker';
import { MailIcon } from '@/assets/icons/mailIcon';
import { PhoneIcon } from '@/assets/icons/phoneIcon';

export const metadata: Metadata = {
  title: 'AgroFilmProduction – СТВОРЮЄМО ВІДЕО ДЛЯ АГРОБІЗНЕСУ',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
        <TagCarousel />
        <LeadSeeker
          colorMain={'#1C9E00'}
          colorWithOpacity={'#1C9E0080'}
          containerBottom={'120px'}
          className={'green-seeker'}
        >
          <MailIcon />
        </LeadSeeker>
        <LeadSeeker
          colorMain={'#2196F3'}
          colorWithOpacity={'#2196F380'}
          containerBottom={'50px'}
          className={'green-seeker'}
        >
          <PhoneIcon />
        </LeadSeeker>
        <Footer />
      </body>
    </html>
  );
}