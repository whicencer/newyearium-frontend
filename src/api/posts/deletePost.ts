import axios from "axios";

export const deletePost = async (postId: string) => {
  try {
    const { data } = await axios.delete(`/api/posts/${postId}`);

    return data;
  } catch (error) {
    console.error(error);
  }
}