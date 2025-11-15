import React from 'react';

const Terminal: React.FC = () => (
  <div className="terminal">
    <div className="terminal-header">
      <div className="terminal-dot dot-red"></div>
      <div className="terminal-dot dot-yellow"></div>
      <div className="terminal-dot dot-green"></div>
    </div>
    <div className="terminal-line">
      <span className="prompt">alex@portfolio:~$</span>
      <span className="command">whoami</span>
    </div>
    <div className="terminal-line">Software Developer | Problem Solver | Coffee Enthusiast</div>
    <div className="terminal-line">
      <span className="prompt">alex@portfolio:~$</span>
      <span className="command">ls skills/</span>
    </div>
    <div className="terminal-line">Dart  Kotlin  Java  Swift  Flutter  C++ </div>
  </div>
);

export default Terminal;
