import { BriefPage } from '@/containers/BriefPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Бриф - AgroFilmProduction',
};

export default function Brief() {
  return <BriefPage />;
}
