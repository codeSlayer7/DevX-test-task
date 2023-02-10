import { IPhoto } from "../interfaces";

export const getPosts = async (): Promise<IPhoto[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

export const getOnePost = async (id:string): Promise<IPhoto> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
};
