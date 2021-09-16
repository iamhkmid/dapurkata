import { date, number, string } from "yup/lib/locale";
import { NestedValue } from "react-hook-form";
export type TAddBook = {
  title: string;
  description: string;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  bookHeight: number;
  stock: number;
  price: number;
  rating: string;
  libraryType: { id: string; value: String };
  categoryType: { id: string; value: String };
  published: { id: string; value: String };
  author: { id: string; value: String };
  category: { id: string; value: String }[];
  cover: any;
};

export type TFormCreateBook = {
  title: string;
  description: string;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  height: number;
  weight: number;
  stock: number;
  price: number;
  rating: string;
  libraryType: string;
  typeCategory: string;
  published: string;
  author: string;
  category: string[];
  cover: any;
};

export type TFormUpdateBook = {
  bookId: string;
  title: string;
  description: string;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  height: number;
  weight: number;
  stock: number;
  price: number;
  rating: string;
  libraryType: string;
  typeCategory: string;
  published: string;
  author: string;
  category: string[];
};

export type TFormAuthor = {
  name: string;
};

export type TGetFormBook = {
  author: { id: string; name: string }[];
  category: { id: string; name: string; group: string }[];
};

export type TGetFormCategory = {
  group: { id: string; name: string }[];
};

export type TFormAddRecipient = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  province: string;
  city: string;
  address: string;
};
export type TFormEditRecipient = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  province: string;
  city: string;
  address: string;
};
