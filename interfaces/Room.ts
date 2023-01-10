import { ObjectId } from "mongoose";
import { PostData } from "./PostsData";

export interface Room {
  _id: ObjectId;
  roomName: string;
  description: string | undefined;
  posts: PostData[];
  usersNum: number;
  __v: number;
}
