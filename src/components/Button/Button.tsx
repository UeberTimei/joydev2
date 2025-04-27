import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  variant?: "primary" | "regular" | "minimal" | "active" | "danger";
  disabled?: boolean;
  withIcon?: "plus" | "dropdown" | null;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  disabled = false,
  withIcon = null,
  className,
  onClick,
}) => {
  const buttonClass = classNames(
    styles.button,
    {
      [styles.button_primary]: variant === "primary",
      [styles.button_regular]: variant === "regular",
      [styles.button_minimal]: variant === "minimal",
      [styles.button_active]: variant === "active",
      [styles.button_danger]: variant === "danger",
      [styles.button_disabled]: disabled,
      [styles.button_withIcon]: withIcon,
    },
    className
  );

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {withIcon === "plus" && <span className={styles.button__icon}>+</span>}
      <span className={styles.button__label}>{label}</span>
      {withIcon === "dropdown" && (
        <span className={styles.button__icon}>▼</span>
      )}
    </button>
  );
};

export default Button;
