import { createContext, useContext } from "react";

export interface Post {
  id: number;
  title: string;
  body: string;
  authorName: string;
}

export interface PostsContextType {
  posts: Post[];
  authors: string[];
  loading: boolean;
}

export const PostsContext = createContext<PostsContextType | undefined>(
  undefined
);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};
