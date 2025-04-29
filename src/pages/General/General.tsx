import React from "react";
import styles from "./General.module.scss";
import { usePosts } from "../../context/PostsContext.utils";
import Text from "../../components/Text/Text";
import Heading from "../../components/Heading/Heading";
import PostGrid from "../../components/PostGrid/PostGrid";

const GeneralPage: React.FC = () => {
  const { posts, loading } = usePosts();

  if (loading) {
    return (
      <Text size={500} weight="semibold" className={styles.loading_text}>
        Загрузка...
      </Text>
    );
  }

  return (
    <div className={styles.generalPage}>
      <Heading level={500}>Посты</Heading>
      <PostGrid posts={posts} />
    </div>
  );
};

export default GeneralPage;
