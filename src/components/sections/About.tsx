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
            <p>I'm a Senior Mobile Software Engineer with 6+ years of experience delivering scalable Android and cross-platform mobile applications in production environments. My expertise spans Flutter (4+ years) and native Android development, with proven ownership of end-to-end mobile solutions.</p>

            <p>I specialize in architecture design, API and IoT integrations, performance optimization, and release management. My work includes building reliable, user-centric applications for enterprise and high-growth products, including YourCampus which serves 70k+ users with 280+ app store ratings.</p>

            <p>Currently focused on Flutter and Android development, IoT-enabled mobile platforms, and implementing Clean Architecture principles to build maintainable and scalable applications.</p>

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
