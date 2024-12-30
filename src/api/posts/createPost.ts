import axios from "axios";

interface PostData {
  authorUsername:  string;
  authorFirstname: string;
  authorAvatar:    string;
  anonymous:       boolean;
  body:            string;
  authorId:        string;
}

export const createPost = async (postData: PostData) => {
  try {
    const { data } = await axios.post('/api/posts', postData);

    if (!data.ok) {
      throw new Error(data.error);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}