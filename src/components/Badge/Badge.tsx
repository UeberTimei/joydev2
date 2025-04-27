import React from "react";
import classNames from "classnames";
import styles from "./Badge.module.scss";

interface BadgeProps {
  variant?: "subtle" | "solid";
  color?:
    | "neutral"
    | "green"
    | "blue"
    | "red"
    | "orange"
    | "purple"
    | "yellow"
    | "teal";
  value: number | string;
  className?: string;
  isPill?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "subtle",
  color = "neutral",
  isPill = false,
  value,
  className,
}) => {
  const displayValue = typeof value === "number" && value > 99 ? "99+" : value;

  return (
    <span
      className={classNames(
        styles.badge,
        styles[variant],
        styles[color],
        isPill && styles.pill,
        className
      )}
    >
      {displayValue}
    </span>
  );
};
