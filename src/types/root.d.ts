type RootStackParamList = {
  AuthNavigator: undefined;
  HomeNavigator: undefined;
};

type AuthStackParams = {
  Auth: undefined;
  SignUp: undefined;
  Login: undefined;
  ResetPassword: undefined;
  NewPassword: {
    token: string;
  };
};
export type RootStackParams = RootStackParamList & AuthStackParams;
