import http from "src/http/axios/axios";
import { createPostDTO } from "src/types/dto";
import { Post } from "src/types/post";

export const sendPost = async (post: createPostDTO) => {
  try {
    const data = await http.post("/posts", post);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPostsByUser = async (userId: string): Promise<Post[]> => {
  try {
    const { data } = await http.get<Post[]>(`/posts/user/${userId}`);

    return data;
  } catch (error) {
    console.error(error);
    throw new Error
  }
};
