import { TGQLUserPic } from "./picture";

export type TUser = {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  imgDir: string;
};

export type TCreateUserData = {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  imgDir: string;
};

export type TUpdateUserData = {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  role: string;
  phone: string;
  imgDir: string;
};

export type TArgsCreateUser = {
  data: TCreateUserData;
  userPic?: any;
};

export type TArgsUpdateUser = {
  userId: string;
  data: TUpdateUserData;
};

export type TArgsChangePassword = {
  data: { oldPassword: string; newPassword: string };
};

export type TGQLUser = {
  id: string;
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  imgDir: string;
  createdAt: Date;
  updatedAt: Date;
};
type TDBCheckUser = {
  id: string;
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  imgDir: string;
  UserPicture: TGQLUserPic;
  createdAt: Date;
  updatedAt: Date;
};
export type TUserCtx = {
  id: string;
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  role: string;
  phone: string;
};
