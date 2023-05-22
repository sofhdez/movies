// Button.tsx
import React from "react";
import { ButtonLink } from "./style";

interface ButtonProps {
  text: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return <ButtonLink href={link}>{text}</ButtonLink>;
};

export default Button;
