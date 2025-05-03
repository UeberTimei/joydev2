import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { Card } from "../Card/Card";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <Card className={styles.modal}>
        <Heading level={500} className={styles.modalTitle}>
          Delete Task
        </Heading>
        <p className={styles.modalText}>
          Do you want to delete a task "{title}"?
        </p>
        <div className={styles.buttonGroup}>
          <Button label="Cancel" onClick={onClose} />
          <Button
            label="Delete"
            onClick={onConfirm}
            className={styles.deleteButton}
          />
        </div>
      </Card>
    </div>
  );
};
