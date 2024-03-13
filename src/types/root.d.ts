type RootStackParamList = {
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


export type DrawerStackParams = {
  HomeTabs: HomeStackParams;
  Profile: { userId?: string };
  Settings: undefined;
};

export type HomeStackParams = {
  Feed: undefined;
};
