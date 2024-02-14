import React from 'react';

const AnchorLink = ({ href, children, offset }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default AnchorLink;
