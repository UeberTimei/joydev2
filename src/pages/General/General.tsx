import React, { useCallback, useState } from "react";
import styles from "./General.module.scss";
import { usePosts } from "../../context/PostsContext.utils";
import Text from "../../components/Text/Text";
import Heading from "../../components/Heading/Heading";
import PostGrid from "../../components/PostGrid/PostGrid";
import FilterPanel from "../../components/FilterPanel/FilterPanel";

const GeneralPage: React.FC = () => {
  const { posts, loading } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const filterPosts = useCallback(
    async ({ author, keywords }: { author: string; keywords: string[] }) => {
      const filtered = posts.filter((post) => {
        const matchesAuthor = !author || post.authorName === author;

        const matchesKeywords =
          keywords.length === 0 ||
          keywords.some((keyword) => {
            const regex = new RegExp(`\\b${keyword}\\b`, "i");
            return (
              regex.test(post.title) ||
              regex.test(post.body) ||
              regex.test(post.authorName)
            );
          });

        return matchesAuthor && matchesKeywords;
      });

      setFilteredPosts(filtered);
    },
    [posts]
  );

  if (loading) {
    return (
      <Text size={500} weight="semibold" className={styles.loading_text}>
        Загрузка...
      </Text>
    );
  }

  return (
    <div className={styles.generalPage}>
      <div className={styles.generalPage__container}>
        <Heading level={500}>Посты</Heading>
        <FilterPanel onFilterChange={filterPosts} />
      </div>
      <PostGrid posts={filteredPosts} />
    </div>
  );
};

export default GeneralPage;
