import { PostData } from "./PostsData";

export interface Room {
  _id: string;
  roomName: string;
  description: string | undefined;
  posts: PostData[];
  usersNum: number;
  __v: number;
}
