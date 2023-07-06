import React, { useState } from 'react';

function MenuIcon() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`menu-icon ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default MenuIcon;
