'use client';
import BlogCard from './ui/blogCard';


interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  image: string;
  description: string;
  content: string;
}

interface BlogListProps {
  posts: BlogPost[];
  title?: string;
  description?: string;
  limit?: number;
}

const BlogList = ({ 
  posts, 
  limit 
}: BlogListProps) => {
  // Limit posts if specified
  const displayedPosts = limit ? posts.slice(0, limit) : posts;
  
  return (
    <section className="py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              slug={post.slug}
              date={post.date}
              author={post.author}
              image={post.image}
              description={post.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;