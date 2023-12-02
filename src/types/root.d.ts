type RootStackParamList = {
  AuthNavigator: undefined;
  HomeNavigator: undefined;
};

type AuthStackParams = {
  Auth: any;
  SignUp: any;
  Login: any;
  ResetPassword: any;
  NewPassword: {
    token: string;
  };
};
export type RootStackParams = RootStackParamList & AuthStackParams;
