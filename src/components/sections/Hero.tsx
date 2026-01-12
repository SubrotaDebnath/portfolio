import React from 'react';
import type {HeroProps} from '../../domain/types';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { Button } from '../ui/Button.tsx';
import Terminal from '../../components/shared/Terminal';

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const typingTexts: string[] = [
    'Senior Mobile Software Engineer',
    'Flutter & Android Development Expert',
    '6+ Years Building Scalable Apps',
    'IoT & Cross-Platform Specialist',
    'Clean Architecture Advocate'
  ];

  const displayText = useTypingEffect(typingTexts);

  return (
    <section className="hero" aria-label="Hero section">
      <div className="container">
        <div className="hero-content">
          <h1>Subrota Debnath</h1>
          <p className="typing-effect" aria-live="polite" aria-atomic="true">{displayText}</p>
          <p>Delivering scalable mobile applications with proven expertise in Flutter, Android, and IoT integrations</p>

          <Terminal />

          <div className="cta-buttons" role="group" aria-label="Call to action buttons">
            <Button onClick={() => onNavigate('projects')} aria-label="View my work projects">
              View My Work
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('contact')} aria-label="Get in touch with me">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
