import React from "react";
import { Toast } from "../../components/Toast/Toast";
import styles from "./ToastPage.module.scss";

export const ToastPage: React.FC = () => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div className={styles.container}>
      <div className={styles.toasts}>
        <Toast
          variant="success"
          message="YOU HAVE SUCCESSFULLY ENABLED PERSONAS."
        />
        <Toast
          variant="info"
          message="THERE ARE OVER 180 INTEGRATIONS AVAILABLE."
        />
        <Toast
          variant="warning"
          message="YOUR PLAN ONLY SUPPORTS A COMPUTE HISTORY OF 30 DAYS."
        />
        <Toast
          variant="error"
          message="WE WEREN’T ABLE TO SAVE YOUR CHANGES."
        />
        <Toast
          variant="success"
          message="YOU HAVE SUCCESSFULLY ENABLED PERSONAS."
          description={loremIpsum}
        />
        <Toast
          variant="info"
          message="THERE ARE OVER 180 INTEGRATIONS AVAILABLE."
          description={loremIpsum}
        />
        <Toast
          variant="warning"
          message="YOUR PLAN ONLY SUPPORTS A COMPUTE HISTORY OF 30 DAYS."
          description={loremIpsum}
        />
        <Toast
          variant="error"
          message="WE WEREN’T ABLE TO SAVE YOUR CHANGES."
          description={loremIpsum}
        />
      </div>
    </div>
  );
};

export default ToastPage;
