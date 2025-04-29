import React, { useEffect, useState } from "react";
import { PostsContext, Post } from "./PostsContext.utils.ts";

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postsData = await postsResponse.json();

        const usersResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const usersData = await usersResponse.json();

        const userMap = new Map<number, string>(
          usersData.map((user: { id: number; name: string }) => [
            user.id,
            user.name,
          ])
        );

        const mappedPosts: Post[] = postsData.map(
          (post: {
            userId: number;
            id: number;
            title: string;
            body: string;
          }) => ({
            id: post.id,
            title: post.title,
            body: post.body,
            authorName: userMap.get(post.userId) || "Unknown Author",
          })
        );

        const uniqueAuthors = Array.from(
          new Set(mappedPosts.map((post) => post.authorName))
        );

        setPosts(mappedPosts);
        setAuthors(uniqueAuthors);
        setLoading(false);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, authors, loading }}>
      {children}
    </PostsContext.Provider>
  );
};
