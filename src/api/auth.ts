import http from "src/http/axios/axios";
import { UserSignUpDTO } from "src/types/dto/UserSignUp.dto";

export const signUp = async (data: UserSignUpDTO) => {
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
