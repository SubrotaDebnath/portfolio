import React from 'react';
import type {AboutProps} from '../../domain/types';
import {useIntersectionObserver} from '../../hooks/useIntersectionObserver';
import {SkillTag} from '../ui/SkillTag.tsx';

const About: React.FC<AboutProps> = ({skills}) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section-title">About Me</h2>
        <div
          ref={ref}
          className={`about-content ${isVisible ? 'fade-in' : ''}`}
        >
          <div className="about-image" role="img" aria-label="Developer emoji">👨‍💻</div>
          <div className="about-text">
            <p>I'm a passionate full-stack developer with 5+ years of experience building scalable web applications and
              distributed systems. My journey started with a curiosity about how things work under the hood, leading me
              to fall in love with clean, efficient code.</p>

            <p>When I'm not coding, you'll find me contributing to open source projects, writing technical blog posts,
              or exploring the latest in cloud architecture. I believe in continuous learning and sharing knowledge with
              the developer community.</p>

            <p>Currently focused on modern web technologies, cloud-native development, and building tools that make
              developers' lives easier.</p>

            <div className="skills" role="list" aria-label="Technical skills">
              {skills.map((skill, index) => (
                <SkillTag key={index} skill={skill}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
