import { PostPage } from '@/containers/PostPage';

export default function Page({ params }: { params: { id: string } }) {
  return <PostPage id={params.id} />;
}
