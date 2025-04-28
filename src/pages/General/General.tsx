import React from "react";
import styles from "./General.module.scss";
import classNames from "classnames";

interface GeneralPageProps {
  className?: string;
}

const GeneralPage: React.FC<GeneralPageProps> = ({ className }) => {
  return (
    <div className={classNames(styles.generalPage, className)}>
      <h1 className={styles.generalPage__title}>UI KIT</h1>
      <p className={styles.generalPage__author}>Сафаров Тимофей Викторович</p>
    </div>
  );
};

export default GeneralPage;
