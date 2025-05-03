import React from "react";
import { Column } from "../../components/Column/Column";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import styles from "./General.module.scss";
import { Task, Column as ColumnType } from "../../types";
import { Card } from "../../components/Card/Card";

const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "Research Project",
    description: "Gather requirements and create initial documentation",
    status: "TODO",
  },
  {
    id: "2",
    title: "Design System",
    description: "Create component library and design tokens",
    status: "TODO",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Implement REST API endpoints",
    status: "IN_PROGRESS",
  },
  {
    id: "4",
    title: "Testing",
    description: "Write unit tests for core functionality",
    status: "DONE",
  },
];

const GeneralPage: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>(INITIAL_TASKS);

  return (
    <div className={styles.generalPage}>
      <Heading level={600} className={styles.pageTitle}>
        Kanban Board
      </Heading>

      <Card className={styles.addTaskCard}>
        <div className={styles.inputGroup}>
          <div className={styles.inputButtonRow}>
            <input
              type="text"
              placeholder="Task Title"
              className={styles.input}
            />
            <Button className={styles.addTaskButton} label="Add Task" />
          </div>

          <textarea
            placeholder="Task Description"
            className={styles.textarea}
          />
        </div>
      </Card>

      <div className={styles.columns}>
        {COLUMNS.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.status === column.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default GeneralPage;
