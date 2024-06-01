import { PostPage } from '@/containers/PostPage';
import { Metadata, ResolvingMetadata } from 'next';
import { blogData } from '@/containers/BlogPage/const';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.id;

  const product = blogData.find(post => post.id === id);

  return {
    title: product?.title,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <PostPage id={params.id} />;
}
