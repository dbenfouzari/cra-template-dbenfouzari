import React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  hover?: boolean;
  focus?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => null,
  hover = false,
  focus = false,
  disabled = false,
}) => (
  <button
    className={classnames(styles.button, {
      [styles.hover]: hover,
      [styles.focus]: focus,
      [styles.disabled]: disabled,
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
