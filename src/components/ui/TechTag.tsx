import React from 'react';

export const TechTag: React.FC<{ tech: string }> = ({ tech }) => (
  <span className="tech-tag">{tech}</span>
);

