import React from "react";
import { Card } from "../Card/Card";
import Heading from "../Heading/Heading";
import styles from "./Column.module.scss";
import Text from "../Text/Text";
import { Column as ColumnType, Task, TaskStatus } from "../../types";

type ColumnProps = {
  column: ColumnType;
  tasks: Task[];
  onDelete: (taskId: string) => void;
  onDrop: (taskId: string, newStatus: TaskStatus) => void;
};

export const Column: React.FC<ColumnProps> = ({
  column,
  tasks,
  onDelete,
  onDrop,
}) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const taskId = e.dataTransfer.getData("taskId");
    onDrop(taskId, column.id);
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: string
  ) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  return (
    <div
      className={styles.column}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Heading level={400} className={styles.columnTitle}>
        {column.title}
      </Heading>
      <div className={tasks.length > 0 ? styles.tasks : styles.emptyTasks}>
        {tasks.map((task) => (
          <Card
            key={task.id}
            elevation={1}
            className={styles.taskCard}
            draggable
            onDragStart={(e) => handleDragStart(e, task.id)}
          >
            <Text size={500} weight="semibold">
              {task.title}
            </Text>
            <Text>{task.description}</Text>
            <span
              role="button"
              className={styles.deleteIcon}
              onClick={() => onDelete(task.id)}
            >
              <Text>✕</Text>
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};
