export interface Post {
  _id: string;
  authorId: string;
  anonymous: boolean;
  authorAvatar: string;
  authorFirstname: string;
  authorUsername: string;
  body: string;
}

export interface PostsStore {
  posts: Post[];
  postsCount: number;
  setPosts: (posts: Post[]) => void;
  addNewPost: (post: Post) => void;
}