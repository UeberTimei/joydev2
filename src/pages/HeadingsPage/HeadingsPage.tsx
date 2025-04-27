import React from "react";
import Heading from "../../components/Heading/Heading";
import styles from "./HeadingsPage.module.scss";

const HeadingsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Heading level={900} className={styles.levels}>
          900
        </Heading>
        <Heading level={900}>Jumbo Titles. When You Feel Funky</Heading>
      </div>
      <div className={styles.row}>
        <Heading level={800} className={styles.levels}>
          800
        </Heading>
        <Heading level={800}>Oversized Screen Titles</Heading>
      </div>
      <div className={styles.row}>
        <Heading level={700} className={styles.levels}>
          700
        </Heading>
        <Heading level={700}>Empty States and Feature Introductions</Heading>
      </div>
      <div className={styles.row}>
        <Heading level={600} className={styles.levels}>
          600
        </Heading>
        <Heading level={600}>Headings That Identify Key Functionality</Heading>
      </div>
      <div className={styles.row}>
        <Heading className={styles.defaultTag}>Default</Heading>
        <Heading className={styles.levels}>500</Heading>
        <Heading level={500}>Sub-section and Card Headings</Heading>
      </div>
      <div className={styles.row}>
        <Heading level={400} className={styles.levels}>
          400
        </Heading>
        <Heading level={400}>
          Deep Headings and for Highlighting Important Pieces of Information
        </Heading>
      </div>
      <div className={styles.row}>
        <Heading level={300} className={styles.levels}>
          300
        </Heading>
        <Heading level={300}>Heading up a Group of List Items</Heading>
      </div>
      <div className={styles.row}>
        <Heading level={200} className={styles.levels}>
          200
        </Heading>
        <Heading level={200}>Low Level Headings</Heading>
      </div>
      <div className={styles.row}>
        <Heading level={100} className={styles.levels}>
          100
        </Heading>
        <Heading level={100}>
          Lowest Level Headings, Used to Group Items in a Sidebar
        </Heading>
      </div>
    </div>
  );
};

export default HeadingsPage;
