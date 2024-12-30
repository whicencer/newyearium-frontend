import apiClient from "..";

export const deletePost = async (postId: string) => {
  try {
    const { data } = await apiClient.delete(`/api/posts/${postId}`);

    return data;
  } catch (error) {
    console.error(error);
  }
}