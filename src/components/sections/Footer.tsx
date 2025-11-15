import React from 'react';
import type {FooterProps} from '../../domain/types';

const Footer: React.FC<FooterProps> = ({socialLinks}) => {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="social-links" aria-label="Social media links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={`Visit my ${link.name} profile`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <p>&copy; 2025 Subrota Debnath. Built with passion and lots of coffee ☕</p>
      </div>
    </footer>
  );
};

export default Footer;
