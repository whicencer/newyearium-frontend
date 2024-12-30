import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get('/api/posts');
    const data = response.data;

    if (!data.ok) {
      throw new Error(data.error);
    }

    return data.result;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};