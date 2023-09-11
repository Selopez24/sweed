import { baseLocalUrl } from "./server";
import { UserSignUp } from "src/types";

export const signup = async (data: UserSignUp) => {
  console.log({ data });
  try {
    const response = await fetch(`${baseLocalUrl}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Something went wrong!");
    }

    return responseData;
  } catch (error) {
    throw error;
  }
};

export const login = async (data: { username: string; password: string }) => {
  try {
    const response = await fetch(`${baseLocalUrl}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      throw new Error(responseData.message || "Something went wrong!");
    }
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
