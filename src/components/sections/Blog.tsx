import React from 'react';
import type {BlogProps} from '../../domain/types';
import BlogCard from '../../components/shared/BlogCard';
import {Button} from '../ui/Button.tsx';

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <section id="blog" className="blog" aria-labelledby="blog-heading">
      <div className="container">
        <h2 id="blog-heading" className="section-title">Latest Blog Posts</h2>
        <div className="blog-grid" role="list" aria-label="Blog posts list">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              post={post}
              index={index}
            />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Button variant="secondary" aria-label="View all blog posts">View All Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
