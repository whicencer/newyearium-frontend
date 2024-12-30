import { create } from "zustand";
import { Post, PostsStore } from "./posts/types";

export const usePostsStore = create<PostsStore>((set) => ({
  posts: [],
  postsCount: 0,
  setPosts: (posts) => set({ posts, postsCount: posts.length }),
  addNewPost: (post: Post) => {
    set((state) => ({
      posts: [...state.posts, post],
      postsCount: state.posts.length + 1,
    }))
  }
}));