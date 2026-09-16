import Link from 'next/link';
import LikeButton from '../components/Button';

type Post = {
  id: number;
  title: string;
};

async function getPost(): Promise<Post[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );

  return response.json();
}

export default async function BlogPage() {
  const posts = await getPost();
  return (
    <main>
      <h1>Blog</h1>

      <p>Daftar artikel.</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
