import React from "react";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import styles from "./ParagraphsPage.module.scss";

export const ParagraphsPage: React.FC = () => {
  const sampleText =
    "Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud impetus antiopam. Eu wisi commune voluptat pro, usu at alii magna aperiam.";

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Paragraph / 300</h2>
        <Paragraph size="300">{sampleText}</Paragraph>
      </div>

      <div>
        <h2 className={styles.title}>Paragraph / 400</h2>
        <Paragraph size="400">{sampleText}</Paragraph>
      </div>

      <div>
        <h2 className={styles.title}>Paragraph / 500</h2>
        <Paragraph size="500">{sampleText}</Paragraph>
      </div>
    </div>
  );
};

export default ParagraphsPage;
