import http from "src/http/axios"

export const getUserPosts = async (userId: string | undefined): Promise<any> => {
  const { data } = await http.get(`/posts/user/${userId}`)
  return data
}
