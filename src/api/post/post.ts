import http from "src/http/axios/axios";
import { createPostDTO } from "src/types/dto";

export const sendPost = async (post: createPostDTO) => {
  try {
    const data = await http.post("/posts", post);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
