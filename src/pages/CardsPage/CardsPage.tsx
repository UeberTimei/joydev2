import React from "react";
import { Card } from "../../components/Card/Card";
import styles from "./CardsPage.module.scss";

export const CardsPage: React.FC = () => {
  return (
    <div className={styles.cardsPage}>
      <div className={styles.cardsPage__container}>
        <div className={styles.cardsPage__item}>
          <Card elevation={0}>
            <p className={styles.cardsPage__item__title}>Card / Elevation 0</p>
            <p className={styles.cardsPage__item__text}>Flat Card</p>
          </Card>
        </div>
        <div className={styles.cardsPage__item}>
          <Card elevation={1}>
            <p className={styles.cardsPage__item__title}>Card / Elevation 1</p>
            <p className={styles.cardsPage__item__text}>Floating Card</p>
          </Card>
        </div>
        <div className={styles.cardsPage__item}>
          <Card elevation={2}>
            <p className={styles.cardsPage__item__title}>Card / Elevation 2</p>
            <p className={styles.cardsPage__item__text}>
              Inline dialogs and dropdowns
            </p>
          </Card>
        </div>
        <div className={styles.cardsPage__item}>
          <Card elevation={3}>
            <p className={styles.cardsPage__item__title}>Card / Elevation 3</p>
            <p className={styles.cardsPage__item__text}>Dialogs</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
