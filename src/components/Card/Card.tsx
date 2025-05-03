import React from "react";
import classNames from "classnames";
import styles from "./Card.module.scss";

interface CardProps {
  elevation?: 0 | 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const Card: React.FC<CardProps> = ({
  elevation = 0,
  children,
  className,
  draggable = false,
  onDragStart,
}) => {
  const cardClasses = classNames(
    styles.card,
    [styles[`card--elevation-${elevation}`]],
    className
  );

  return (
    <div
      className={cardClasses}
      draggable={draggable}
      onDragStart={onDragStart}
    >
      {children}
    </div>
  );
};
