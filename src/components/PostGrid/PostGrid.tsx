import React from "react";
import { Card } from "../Card/Card";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import styles from "./PostGrid.module.scss";

interface Post {
  id: number;
  title: string;
  body: string;
  authorName: string;
}

interface PostGridProps {
  posts: Post[];
}

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <Text size={400} className={styles.noResults}>
        По вашему запросу ничего не найдено
      </Text>
    );
  }

  return (
    <div className={styles.postGrid}>
      {posts.map((post) => (
        <Card key={post.id} elevation={1} className={styles.postGrid__card}>
          <Heading level={600}>{post.title}</Heading>
          <Text size={500}>{post.body}</Text>
          <Text size={400} weight="medium">
            Автор: {post.authorName}
          </Text>
        </Card>
      ))}
    </div>
  );
};

export default PostGrid;
