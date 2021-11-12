import {
  TBooksWithFilter,
  TDBBooksWithFilter,
  TDBCreateBook,
  TDBUpdateBook,
  TGQLBooksWithFilter,
} from "../../../types/book";
import { TBookMutation, TBookQuery, TBook } from "../../../types/graphql";
import { makeDirFile, removeDir } from "../../utils/uploadFIle";
import { bookFilter, saveBookPic } from "./utils";

export const Query: TBookQuery = {
  book: async (_, { bookId }, { db }) =>
    await db.book.findUnique({ where: { id: bookId } }),
  books: async (_, __, { db }) => await db.book.findMany(),
  booksWithFilter: async (_, { filter }, { db, cache }) => {
    if (cache.has("books_with_filter")) {
      const books = cache.get("books_with_filter") as TDBBooksWithFilter[];
      return bookFilter({ books, filter });
    } else {
      const findBooks = await db.book.findMany({
        select: {
          id: true,
          title: true,
          price: true,
          stock: true,
          coverType: true,
          discount: true,
          Author: true,
          BookPicture: true,
          Category: { select: { id: true } },
        },
      });
      const books = findBooks.reduce(
        (acc, curr) => [
          ...acc,
          {
            id: curr.id,
            title: curr.title,
            authorName: curr.Author.name,
            price: curr.price,
            stock: curr.stock,
            coverType: curr.coverType,
            discount: curr.discount,
            categoryIds: curr.Category.reduce(
              (acc, curr) => [...acc, curr.id],
              [] as string[]
            ),
            coverURL: curr.BookPicture.find((val) => val.type === "COVER")?.url,
          },
        ],
        [] as TDBBooksWithFilter[]
      );
      cache.set("books_with_filter", books);
      return bookFilter({ books, filter });
    }
  },
};

export const Mutation: TBookMutation = {
  createBook: async (_, { data, cover, bookPics }, { db }) => {
    const { pictureDir } = await makeDirFile({
      dirLoc: "/server/static/uploads/books",
    });
    const imageInfo =
      (cover || bookPics) &&
      (await saveBookPic({ pictureDir, cover, bookPics }).catch((err) => {
        removeDir(pictureDir);
        throw err;
      }));
    const newData: TDBCreateBook = {
      title: data.title,
      description: data.description || undefined,
      edition: data.edition || undefined,
      series: data.series || undefined,
      releaseYear: data.releaseYear || undefined,
      numberOfPages: data.numberOfPages || undefined,
      lenght: data.lenght || undefined,
      width: data.width || undefined,
      weight: data.weight || undefined,
      stock: data.stock,
      price: data.price,
      condition: data.condition,
      discount: data.discount || 0,
      coverType: data.coverType,
      language: data.language || undefined,
      isbn: data.isbn || undefined,
      pictureDir,
      Category: {
        connect: data.categories
          ? data.categories.map((cat) => ({ id: cat.id }))
          : undefined,
      },
      Author: { connect: data.authorId ? { id: data.authorId } : undefined },
      Publisher: {
        connect: data.publisherId ? { id: data.publisherId } : undefined,
      },
      BookPicture: { create: imageInfo || undefined },
    };

    try {
      return await db.book.create({ data: newData });
    } catch (error) {
      await removeDir(pictureDir);
      throw error;
    }
  },

  updateBook: async (_, { data }, { db }) => {
    const newData: TDBUpdateBook = {
      title: data.title || undefined,
      description: data.description || undefined,
      edition: data.edition || undefined,
      series: data.series || undefined,
      releaseYear: data.releaseYear || undefined,
      numberOfPages: data.numberOfPages || undefined,
      lenght: data.lenght || undefined,
      width: data.width || undefined,
      weight: data.weight || undefined,
      stock: data.stock || undefined,
      price: data.price || undefined,
      condition: data.condition,
      discount: data.discount || 0,
      coverType: data.coverType,
      language: data.language || undefined,
      isbn: data.isbn || undefined,
      Category: {
        set: data.categories
          ? data.categories.map((cat) => ({ id: cat.id }))
          : undefined,
      },
      Author: { connect: data.authorId ? { id: data.authorId } : undefined },
      Publisher: {
        connect: data.publisherId ? { id: data.publisherId } : undefined,
      },
    };
    return await db.book.update({
      where: { id: data.bookId },
      data: newData,
    });
  },

  deleteBook: async (_, { bookId }, { db }) => {
    const book = await db.book.delete({ where: { id: bookId } });
    await removeDir(book.pictureDir);
    return book;
  },
};

export const Book: TBook = {
  Author: async ({ id }, _, { db }) => {
    const book = await db.book.findUnique({
      where: { id },
      select: { Author: true },
    });
    return book.Author;
  },
  Publisher: async ({ id }, _, { db }) => {
    const book = await db.book.findUnique({
      where: { id },
      select: { Publisher: true },
    });
    return book.Publisher;
  },
  Category: async ({ id }, _, { db }) => {
    const book = await db.book.findUnique({
      where: { id },
      select: { Category: true },
    });
    return book.Category;
  },
  BookPicture: async ({ id }, _, { db }) => {
    const book = await db.book.findUnique({
      where: { id },
      select: { BookPicture: true },
    });
    return book.BookPicture;
  },
};
