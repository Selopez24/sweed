export type UserSignUp = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};


export type User = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  access_token: string;
  id: string;
  createDate: Date;
}
