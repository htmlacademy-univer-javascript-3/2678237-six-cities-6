export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type AuthUser = {
  email: string;
  password: string;
}
