import React from "react";
import styles from "./General.module.scss";
import classNames from "classnames";

interface GeneralPageProps {
  className?: string;
}

const GeneralPage: React.FC<GeneralPageProps> = ({ className }) => {
  return (
    <div className={classNames(styles.generalPage, className)}>
      <p>general</p>
    </div>
  );
};

export default GeneralPage;
