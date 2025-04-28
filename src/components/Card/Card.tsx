import React from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

interface CardProps {
  elevation?: 0 | 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  elevation = 0,
  children,
  className,
}) => {
  const cardClasses = classNames(
    styles.card,
    [styles[`card--elevation-${elevation}`]],
    className
  );

  return <div className={cardClasses}>{children}</div>;
};
