import React from "react";
import classNames from "classnames";
import styles from "./Heading.module.scss";

interface HeadingProps {
  level?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Heading: React.FC<HeadingProps> = ({
  level = 500,
  children,
  className,
  style,
}) => {
  const headingClass = classNames(
    styles.heading,
    {
      [styles[`level${level}`]]: true,
    },
    className
  );

  return (
    <h1 className={headingClass} style={style}>
      {children}
    </h1>
  );
};

export default Heading;
