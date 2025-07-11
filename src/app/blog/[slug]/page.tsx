'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import blogData from '@/data/blogData.json';
import BlogDetail from '@/components/ui/blogDetail';

interface BlogPostParams {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = use(params); 

  const post = blogData.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogData
    .filter((p) => p.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return <BlogDetail post={post} relatedPosts={relatedPosts} />;
}
