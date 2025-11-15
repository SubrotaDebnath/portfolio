import React from 'react';
import type {HeroProps} from '../../domain/types';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { Button } from '../ui/Button.tsx';
import Terminal from '../../components/shared/Terminal';

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const typingTexts: string[] = [
    'Mobile App Developer & Open Source Enthusiast',
    'Building Modern Applications',
    'Passionate About Clean Code',
    'Always Learning New Technologies',
    'Problem Solver & Coffee Enthusiast'
  ];

  const displayText = useTypingEffect(typingTexts);

  return (
    <section className="hero" aria-label="Hero section">
      <div className="container">
        <div className="hero-content">
          <h1>Subrota Debnath</h1>
          <p className="typing-effect" aria-live="polite" aria-atomic="true">{displayText}</p>
          <p>Building digital experiences with clean code and creative solutions</p>

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
