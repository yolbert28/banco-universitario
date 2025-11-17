
// src/components/Header.tsx

import React from 'react';

interface HeaderProps {
  title: string;
  backgroundImageUrl: string;
}

function Header({ title, backgroundImageUrl }: HeaderProps) {
  
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImageUrl})`
  };

  return (
    <header className="main-header" style={headerStyle}>
      <div className="header-content">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

export default Header;