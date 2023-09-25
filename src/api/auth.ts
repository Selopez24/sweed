import { UserSignUp } from "src/types";
import http from "src/http/axios/axios";

export const signUp = async (data: UserSignUp) => {
  try {
    const { data: responseData } = await http.post('/users', data)
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const login = async (data: { username: string; password: string }) => {
  try {
    const { data: responseData } = await http.post('/auth/login', data)
    return responseData;
  } catch (error) {
    throw error;
  }
};
