import React from 'react';

export const BlogTag: React.FC<{ tag: string }> = ({tag}) => (
  <span className="blog-tag">{tag}</span>
);

