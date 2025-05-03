import React from "react";
import { Card } from "../Card/Card";
import Heading from "../Heading/Heading";
import styles from "./Column.module.scss";
import Text from "../Text/Text";
import { Column as ColumnType, Task } from "../../types";

type ColumnProps = {
  column: ColumnType;
  tasks: Task[];
};

export const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <div className={styles.column}>
      <Heading level={400} className={styles.columnTitle}>
        {column.title}
      </Heading>
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <Card key={task.id} elevation={1} className={styles.taskCard}>
            <Text size={500} weight="semibold">
              {task.title}
            </Text>
            <Text>{task.description}</Text>
            <span role="button" className={styles.deleteIcon}>
              <Text>✕</Text>
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};
