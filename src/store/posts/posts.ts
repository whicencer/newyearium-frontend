import { create } from "zustand";
import { Post, PostsStore } from "./types";

export const usePostsStore = create<PostsStore>((set) => ({
  posts: [],
  postsCount: 0,
  setPosts: (posts) => set({ posts, postsCount: posts.length }),
  addNewPost: (post: Post) => {
    set((state) => ({
      posts: [post, ...state.posts],
      postsCount: state.posts.length + 1,
    }))
  },
  deletePost: (postId: string) => {
    set((state) => ({
      posts: state.posts.filter((post) => post._id !== postId),
      postsCount: state.posts.length - 1,
    }))
  }
}));