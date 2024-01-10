import http from "src/http/axios/axios";
import { UserSignUpDTO } from "src/types/dto/UserSignUp.dto";

export const signUp = async (data: UserSignUpDTO) => {
  try {
    const { data: responseData } = await http.post("/users", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const login = async (data: { username: string; password: string }) => {
  try {
    const { data: responseData } = await http.post("/auth/login", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (email: string) => {
  try {
    const resp = await http.post("/auth/reset-password", {
      email,
    });
    const data = resp.data.data;

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const confirmResetPassword = async (
  token: string,
  newPassword: string,
) => {
  try {
    const response = await http.post("/auth/reset-confirm", {
      token,
      newPassword,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
