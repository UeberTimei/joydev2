import React from "react";
import Text from "../../components/Text/Text";
import styles from "./TextPage.module.scss";

const TextPage: React.FC = () => {
  return (
    <div className={styles.textPage}>
      {/* Size 300 */}
      <div className={styles.textPage__group}>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={300} weight="default">
              Text / 300 / Default
            </Text>
          </div>
        </div>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={300} weight="medium">
              Text / 300 / Medium
            </Text>
          </div>
        </div>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={300} weight="semibold">
              Text / 300 / Semibold
            </Text>
          </div>
        </div>
      </div>

      {/* Size 400 */}
      <div className={styles.textPage__group}>
        <div className={styles.textPage__section}>
          <h3 className={styles.textPage__subtitle}>Default</h3>
          <div className={styles.textPage__row}>
            <Text size={400} weight="default">
              Text / 400 / Default
            </Text>
          </div>
        </div>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={400} weight="medium">
              Text / 400 / Medium
            </Text>
          </div>
        </div>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={400} weight="semibold">
              Text / 400 / Semibold
            </Text>
          </div>
        </div>
      </div>

      {/* Size 500 */}
      <div className={styles.textPage__group}>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={500} weight="default">
              Text / 500 / Default
            </Text>
          </div>
        </div>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={500} weight="medium">
              Text / 500 / Medium
            </Text>
          </div>
        </div>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={500} weight="semibold">
              Text / 500 / Semibold
            </Text>
          </div>
        </div>
      </div>

      {/* Link Texts */}
      <div className={styles.textPage__group}>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={300} weight="default" isLink>
              Link / 300
            </Text>
          </div>
        </div>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={400} weight="medium" isLink>
              Link / 400
            </Text>
          </div>
        </div>
        <div className={styles.textPage__section}>
          <div className={styles.textPage__row}>
            <Text size={500} weight="semibold" isLink>
              Link / 500
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextPage;
