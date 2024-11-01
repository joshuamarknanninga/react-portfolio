// src/components/common/Button.jsx

import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Reusable Button Component with Framer Motion Animations
 *
 * Props:
 * - children: The content inside the button
 * - onClick: Function to handle click events
 * - type: Button type (e.g., 'button', 'submit', 'reset')
 * - variant: Style variant (e.g., 'primary', 'secondary')
 * - href: If provided, renders the button as a link
 * - target: Target attribute for link (e.g., '_blank')
 * - rel: Rel attribute for link (e.g., 'noopener noreferrer')
 * - className: Additional custom class names
 */
const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  href,
  target,
  rel,
  className = '',
}) => {
  const MotionButton = motion.button;
  const MotionLink = motion.a;

  const commonProps = {
    className: `custom-button ${variant} ${className}`,
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (href) {
    return (
      <MotionLink
        href={href}
        target={target}
        rel={rel}
        {...commonProps}
        onClick={onClick}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      type={type}
      onClick={onClick}
      {...commonProps}
    >
      {children}
    </MotionButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
