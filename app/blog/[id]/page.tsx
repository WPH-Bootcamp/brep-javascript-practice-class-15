import LikeButton from '@/app/components/Button';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const post: Post = await response.json();

  return {
    title: post.title,
    description: post.body.slice(0, 120),
  };
}

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const post: Post = await response.json();
  return (
    <main>
      <article>
        <p>Post #{post.id}</p>

        <h1>{post.title}</h1>

        <p>{post.body}</p>
        <LikeButton />
      </article>
    </main>
  );
}
