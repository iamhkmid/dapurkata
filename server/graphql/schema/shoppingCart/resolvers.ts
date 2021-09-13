import { ApolloError } from "apollo-server-express";
import { TSChartMutation, TSChartQuery } from "../../../types/graphql";
import { validateUser } from "../../utils/validateUser";

export const Query: TSChartQuery = {
  shoppingCart: async (_, { userId }, { user, db }) => {
    const findUser = await db.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        ShoppingCart: { include: { Book: { include: { BookPicture: true } } } },
      },
    });
    validateUser({
      target: "SPECIFIC_USER_OR_ADMIN",
      targetId: findUser?.id,
      currRole: user.role,
      currId: user.id,
    });
    return findUser.ShoppingCart;
  },
};

export const Mutation: TSChartMutation = {
  createShoppingCart: async (_, args, { user, db }) => {
    const { amount, bookId } = args;
    const findUser = await db.user.findUnique({
      where: { id: user.id },
      select: { id: true, ShoppingCart: { include: { Book: true } } },
    });

    const findBook = await db.book.findUnique({ where: { id: bookId } });
    const maxWeight = Number(process.env.MAX_COURIER_WEIGHT);
    const cartWeight = findUser.ShoppingCart.reduce(
      (acc, curr) => acc + curr.Book.weight * curr.amount,
      0
    );
    const allowed = cartWeight + findBook.weight * amount <= maxWeight;
    if (allowed) {
      return await db.shoppingCart.create({
        data: {
          amount,
          User: { connect: { id: user.id } },
          Book: { connect: { id: bookId } },
        },
      });
    } else {
      throw new ApolloError("Maksimal berat keranjang 30kg.");
    }
  },
  updateShoppingCart: async (_, args, { user, db }) => {
    const { amount, cartId } = args;
    const findSCart = await db.shoppingCart.findUnique({
      where: { id: cartId },
    });
    validateUser({
      target: "SPECIFIC_USER",
      targetId: findSCart?.userId,
      currRole: user.role,
      currId: user.id,
    });
    const findUser = await db.user.findUnique({
      where: { id: findSCart.userId },
      select: { ShoppingCart: { include: { Book: true } } },
    });
    const findBook = await db.book.findUnique({
      where: { id: findSCart.bookId },
    });
    const maxWeight = Number(process.env.MAX_COURIER_WEIGHT);
    const cartWeight = findUser.ShoppingCart.reduce(
      (acc, curr) =>
        curr.id !== cartId ? acc + curr.Book.weight * curr.amount : acc,
      0
    );
    const allowed = cartWeight + findBook.weight * amount <= maxWeight;
    if (allowed) {
      return await db.shoppingCart.update({
        where: { id: cartId },
        data: { amount },
        include: { Book: { include: { BookPicture: true } } },
      });
    } else {
      throw new ApolloError("Maksimal berat keranjang 30kg.");
    }
  },
  deleteShoppingCart: async (_, { cartId }, { user, db }) => {
    const findSCart = await db.shoppingCart.findUnique({
      where: { id: cartId },
      select: { userId: true },
    });
    validateUser({
      target: "SPECIFIC_USER",
      targetId: findSCart?.userId,
      currRole: user.role,
      currId: user.id,
    });
    return await db.shoppingCart.delete({ where: { id: cartId } });
  },
};
