'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes((current) => current + 1)}>
      ❤️ Likes: {likes}
    </button>
  );
}
