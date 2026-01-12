import React from 'react';
import type {NavigationProps} from '../../domain/types';

const Navigation: React.FC<NavigationProps> = ({activeSection, onSectionChange}) => {
  const sections: readonly string[] = ['about', 'projects', 'contact'];

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="container">
        <a href="#" className="logo" aria-label="Home">{'{subrota}'}</a>
        <ul className="nav-links" role="list">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionChange(section);
                }}
                aria-label={`Navigate to ${section} section`}
                aria-current={activeSection === section ? 'page' : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
