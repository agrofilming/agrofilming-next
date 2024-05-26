import { BlogPage } from '@/containers/BlogPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Блог - AgroFilmProduction',
};

export default function Blog() {
  return <BlogPage />;
}
