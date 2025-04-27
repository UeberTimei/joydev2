import React from "react";
import cn from "classnames";
import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  size: "300" | "400" | "500";
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  size,
  children,
  className,
}) => {
  return (
    <p
      className={cn(
        styles.paragraph,
        {
          [styles[`paragraph--size-${size}`]]: size,
        },
        className
      )}
    >
      {children}
    </p>
  );
};
