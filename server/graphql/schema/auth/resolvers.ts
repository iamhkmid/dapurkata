import { AuthenticationError, ValidationError } from "apollo-server-errors";
import { TAuthMutation, TAuthQuery } from "../../../types/graphql";
import { createToken } from "./utils";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const Query: TAuthQuery = {
  checkUser: async (_, __, { db, req }) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];
    if (!!token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const findUser = await db.user.findUnique({
          where: { id: decoded["id"] },
        });
        if (!findUser) throw new AuthenticationError("User not found");
        return findUser;
      } catch (error) {
        throw error;
      }
    } else {
      throw new AuthenticationError("Authentication is required");
    }
  },
};

export const Mutation: TAuthMutation = {
  signin: async (_, args, { db, mail }) => {
    mail.sendMail({
      from: `dapurkata.dev@gmail.com`,
      to: "iamhkmid@gmail.com",
      subject: `testing email`,
      text: "Berhasil bro",
    });

    const { username, password, rememberMe } = args;
    const findUser = await db.user.findUnique({
      where: { username },
    });
    if (!findUser)
      throw new AuthenticationError("Username or Password incorrect");

    const checkPw = await bcrypt.compare(password, findUser.password);
    if (!checkPw)
      throw new AuthenticationError("Username or Password incorrect");

    const token = createToken({ id: findUser.id, role: findUser.role });
    return { jwt: token, user: findUser };
  },
};
