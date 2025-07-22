'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
// Removed ReactMarkdown import

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  description: string;
  content: string;
}

interface BlogDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogDetail = ({ post, relatedPosts }: BlogDetailProps) => {
  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.slug]);

  return (
    <div className="py-16 md:py-24 bg-background max-w-7xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          {/* Hero section */}
          <div className="mb-10">
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span>{formattedDate}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors">
                Back to Blog
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">{post.description}</p>
            
            <div className="relative h-72 md:h-96 w-full max-w-4xl rounded-lg overflow-hidden shadow-lg mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
          </article>
          
          {/* Author bio */}
          <div className="mt-16 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <div className="h-16 w-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl">
                  {post.author.split(' ').map(name => name[0]).join('')}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{post.author}</h3>
                <p className="text-gray-600">
                  Industrial Engineering Expert at Gartels, specializing in spring design and manufacturing processes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Related articles section */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-700 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;