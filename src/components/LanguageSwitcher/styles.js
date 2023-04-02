import React, { useState, useEffect } from 'react';
const LanguageSwitcher = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scroll-button ${visible ? 'visible' : ''}`} onClick={handleClick}>
      <i className="fa fa-chevron-up"></i>
    </div>
  );
};

export default ScrollButton;
