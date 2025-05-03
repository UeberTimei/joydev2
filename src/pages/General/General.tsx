import React, { useState } from "react";
import { Column } from "../../components/Column/Column";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import styles from "./General.module.scss";
import { Task, Column as ColumnType, TaskStatus } from "../../types";
import { Card } from "../../components/Card/Card";
import { Modal } from "../../components/Modal/Modal";

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
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const handleAddTask = () => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status: "TODO",
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const handleDeleteClick = (taskId: string) => {
    setTaskToDelete(taskId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      setTasks(tasks.filter((task) => task.id !== taskToDelete));
    }
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  const getTaskTitle = () => {
    const task = tasks.find((t) => t.id === taskToDelete);
    return task ? task.title : "";
  };

  const handleDrop = (taskId: string, newStatus: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className={styles.generalPage}>
      <Heading level={600} className={styles.pageTitle}>
        Kanban Board
      </Heading>

      <Card className={styles.addTaskCard} elevation={3}>
        <div className={styles.inputGroup}>
          <div className={styles.inputButtonRow}>
            <input
              type="text"
              placeholder="Task Title"
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button
              className={styles.addTaskButton}
              label="Add Task"
              onClick={handleAddTask}
            />
          </div>

          <textarea
            placeholder="Task Description"
            className={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </Card>

      <div className={styles.columns}>
        {COLUMNS.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.status === column.id)}
            onDelete={handleDeleteClick}
            onDrop={handleDrop}
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        title={getTaskTitle()}
      />
    </div>
  );
};

export default GeneralPage;
