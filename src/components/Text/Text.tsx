import React from "react";
import classNames from "classnames";
import styles from "./Text.module.scss";

interface TextProps {
  size?: 300 | 400 | 500;
  weight?: "default" | "medium" | "semibold";
  isLink?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  size = 400,
  weight = "default",
  isLink = false,
  children,
  className,
}) => {
  const textClass = classNames(
    styles.text,
    styles[`text--size-${size}`],
    styles[`text--weight-${weight}`],
    {
      [styles["text--link"]]: isLink,
    },
    className
  );

  return <span className={textClass}>{children}</span>;
};

export default Text;
