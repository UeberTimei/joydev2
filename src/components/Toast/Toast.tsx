import React from "react";
import cn from "classnames";
import styles from "./Toast.module.scss";
import Text from "../Text/Text";

interface ToastProps {
  variant: "success" | "info" | "warning" | "error";
  message: string;
  description?: string;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  variant,
  message,
  description,
  className,
}) => {
  const getIcon = () => {
    switch (variant) {
      case "success":
        return "✔";
      case "info":
        return "ℹ";
      case "warning":
        return "⚠";
      case "error":
        return "❗";
      default:
        return "";
    }
  };

  return (
    <div
      className={cn(
        styles.toast,
        {
          [styles.success]: variant === "success",
          [styles.info]: variant === "info",
          [styles.warning]: variant === "warning",
          [styles.error]: variant === "error",
          [styles.hasDescription]: !!description,
        },
        className
      )}
    >
      <span className={styles.icon}>{getIcon()}</span>
      <div className={styles.content}>
        <Text weight="semibold" className={styles.content__message} size={400}>
          {message}
        </Text>
        {description && (
          <Text
            weight="default"
            size={500}
            className={styles.content__description}
          >
            {description}
          </Text>
        )}
      </div>
      <button className={styles.closeButton}>×</button>
    </div>
  );
};

export default Toast;
