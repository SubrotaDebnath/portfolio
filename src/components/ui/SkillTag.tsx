import React from 'react';

export const SkillTag: React.FC<{ skill: string }> = ({skill}) => (
  <span className="skill-tag">{skill}</span>
);
