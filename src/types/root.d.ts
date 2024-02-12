type RootStackParamList = {
  AuthNavigator: undefined;
  HomeNavigator: undefined;
};

type AuthStackParams = {
  Auth: undefined;
  SignUp: undefined;
  Login: undefined;
  ResetPassword: undefined;
  NewPasswordScreen: {
    token: string;
  };
};
export type RootStackParams = RootStackParamList & AuthStackParams;
