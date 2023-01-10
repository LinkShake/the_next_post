import { Comments } from "./Comments";

export interface PostData {
  _id: string;
  author: {
    userName: string;
    email: string;
  };
  title: string;
  body: string;
  comments: Comments[];
  __v: number;
}
