import http from "src/http/axios";

export const getUserPosts = async (
  userId: string | undefined
): Promise<any> => {
  const { data } = await http.get(`/posts/user/${userId}`);
  return data;
};

export const followUser = async (userId: string) => {
  const { data } = await http.post(`/followers`, { userToFollowId: userId });
  return data;
};

export const getFollowees = async () => {
  const { data } = await http.get("/followees");
  return data;
};
