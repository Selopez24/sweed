import http from "src/http/axios"
import { Post } from "src/types/post"

export const getUserPosts = async (userId: string | undefined): Promise<Post[]> => {
  const { data } = await http.get(`/posts/user/${userId}`)
  return data
}
