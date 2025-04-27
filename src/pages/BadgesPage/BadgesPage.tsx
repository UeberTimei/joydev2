import React from "react";
import { Badge } from "../../components/Badge/Badge";
import styles from "./BadgesPage.module.scss";

export const BadgesPage: React.FC = () => {
  const colors = [
    "neutral",
    "green",
    "blue",
    "red",
    "orange",
    "purple",
    "yellow",
    "teal",
  ] as const;
  const values = [8, 1, 3, 99, 1, 3, 6, 2];

  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1 className={styles.title}>BADGE SUBTLE 16</h1>
          <div className={styles.badgeGroup}>
            {colors.map((color) => (
              <Badge
                key={`subtle-${color}`}
                variant="subtle"
                color={color}
                value={color.toUpperCase()}
                className={styles.badge}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className={styles.title}>BADGE SOLID 16</h1>
          <div className={styles.badgeGroup}>
            {colors.map((color) => (
              <Badge
                key={`solid-${color}`}
                variant="solid"
                color={color}
                value={color.toUpperCase()}
                className={styles.badge}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className={styles.title}>PILL SUBTLE 16</h1>
          <div className={styles.badgeGroup}>
            {colors.map((color, index) => (
              <Badge
                key={`subtle-${color}`}
                variant="subtle"
                color={color}
                value={values[index] === 99 ? "99+" : values[index]}
                className={styles.badge}
                isPill
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className={styles.title}>PILL SOLID 16</h1>
          <div className={styles.badgeGroup}>
            {colors.map((color, index) => (
              <Badge
                key={`solid-${color}`}
                variant="solid"
                color={color}
                value={values[index] === 99 ? "99+" : values[index]}
                className={styles.badge}
                isPill
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className={styles.title}>BADGE USE CASES</h1>
        <div className={styles.useCases}>
          <div className={styles.useCase}>
            <Badge variant="subtle" color="purple" value="BETA" />
            <Badge variant="solid" color="purple" value="BETA" />
            <span className={styles.description}>Beta</span>
          </div>
          <div className={styles.useCase}>
            <Badge variant="subtle" color="green" value="SUCCESS" />
            <Badge variant="solid" color="green" value="SUCCESS" />
            <span className={styles.description}>
              Operational, available, done, approved, added
            </span>
          </div>
          <div className={styles.useCase}>
            <Badge variant="subtle" color="red" value="REMOVED" />
            <Badge variant="solid" color="red" value="REMOVED" />
            <span className={styles.description}>
              Errors, declined, failed, removed, critical
            </span>
          </div>
          <div className={styles.useCase}>
            <Badge variant="subtle" color="blue" value="IN PROGRESS" />
            <Badge variant="solid" color="blue" value="IN PROGRESS" />
            <span className={styles.description}>
              In progress, open, modified
            </span>
          </div>
          <div className={styles.useCase}>
            <Badge variant="subtle" color="teal" value="TRIAL" />
            <Badge variant="solid" color="teal" value="TRIAL" />
            <span className={styles.description}>
              Trial, new, information, help
            </span>
          </div>
          <div className={styles.useCase}>
            <Badge variant="subtle" color="yellow" value="MOVED" />
            <Badge variant="solid" color="yellow" value="MOVED" />
            <span className={styles.description}>
              Busy, blocked, missing, warning
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgesPage;
