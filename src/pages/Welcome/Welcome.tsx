import React from "react";
import styles from "./Welcome.module.scss";
import classNames from "classnames";

interface WelcomePageProps {
  className?: string;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ className }) => {
  return (
    <div className={classNames(styles.welcomePage, className)}>
      <h1 className={styles.welcomePage__title}>UI KIT</h1>
      <p className={styles.welcomePage__author}>Сафаров Тимофей Викторович</p>
    </div>
  );
};

export default WelcomePage;
