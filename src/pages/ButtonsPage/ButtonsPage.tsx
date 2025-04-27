import React from "react";
import Button from "../../components/Button/Button";
import styles from "./ButtonsPage.module.scss";

const ButtonsPage: React.FC = () => {
  return (
    <div className={styles.buttonsPage}>
      <div className={styles.buttonsPage__section}>
        <div className={styles.buttonsPage__group}>
          <Button label="Label" variant="primary" />
          <Button label="Label" variant="primary" withIcon="plus" />
          <Button label="Label" variant="primary" withIcon="dropdown" />
        </div>
      </div>

      <div className={styles.buttonsPage__section}>
        <div className={styles.buttonsPage__group}>
          <Button label="Label" variant="regular" />
          <Button label="Label" variant="regular" withIcon="plus" />
          <Button label="Label" variant="regular" withIcon="dropdown" />
        </div>
      </div>

      <div className={styles.buttonsPage__section}>
        <div className={styles.buttonsPage__group}>
          <Button label="Label" variant="minimal" />
          <Button label="Label" variant="minimal" withIcon="plus" />
          <Button label="Label" variant="minimal" withIcon="dropdown" />
        </div>
      </div>

      <div className={styles.buttonsPage__section}>
        <div className={styles.buttonsPage__group}>
          <Button label="Label" disabled />
          <Button label="Label" disabled withIcon="plus" />
          <Button label="Label" disabled withIcon="dropdown" />
        </div>
      </div>

      <div className={styles.buttonsPage__section}>
        <div className={styles.buttonsPage__group}>
          <Button label="Label" variant="active" />
          <Button label="Label" variant="active" withIcon="plus" />
          <Button label="Label" variant="active" withIcon="dropdown" />
        </div>
      </div>

      <div className={styles.buttonsPage__section}>
        <div className={styles.buttonsPage__group}>
          <Button label="Label" variant="danger" />
          <Button label="Label" variant="danger" withIcon="plus" />
          <Button label="Label" variant="danger" withIcon="dropdown" />
        </div>
      </div>
    </div>
  );
};

export default ButtonsPage;
