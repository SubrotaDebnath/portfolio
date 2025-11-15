import React, {useState} from 'react';
import type {BlogCardProps} from '../../domain/types';
import {BlogTag} from "../ui/BlogTag.tsx";
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver.ts";

const BlogCard: React.FC<BlogCardProps> = ({post, index}) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <article
      ref={ref}
      className={`blog-card ${post.featured ? 'blog-featured' : ''} ${isVisible ? 'fade-in' : ''}`}
      style={{
        transitionDelay: `${index * 0.1}s`,
        transform: isHovered ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="blog-header">
        <div className="blog-icon">{post.icon}</div>
      </div>
      <div className="blog-content">
        {post.featured && <span className="featured-label">Featured</span>}
        <div className="blog-meta">
          <span className="blog-date">{post.date}</span>
          <span className="blog-category">{post.category}</span>
        </div>
        <h3 className="blog-title">
          <a href={post.url}>{post.title}</a>
        </h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-tags">
          {post.tags.map((tag, idx) => (
            <BlogTag key={idx} tag={tag}/>
          ))}
        </div>
        <a href={post.url} className="read-more">
          {post.featured ? 'Read Full Article' : 'Read More'}
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
