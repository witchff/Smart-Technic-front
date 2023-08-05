export interface FormAuth {
  email: string;
  password: string;
}

export interface Auth {
  user: UserAuth;
  accessToken: string;
}

export interface UserAuth {
  email: string;
}
