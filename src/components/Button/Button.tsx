// Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <a href={link} className="button">
      {text}
    </a>
  );
};

export default Button;
