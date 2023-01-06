import { ObjectId } from "mongoose";

export interface CreatePost {
  roomId: ObjectId;
  roomName: string;
  author_name: string;
  author_email: string;
  title: string;
  content: string;
}

export interface DeletePost {
  roomId: ObjectId;
  id: ObjectId;
  author: {
    userName: string;
    email: string;
  };
  title: string;
  content: string;
}

export interface EditPost {
  roomId: ObjectId;
  roomName: string;
  id: ObjectId;
  author: {
    userName: string;
    email: string;
  };
  title: string;
  content: string;
}

export interface CreateRoom {
  roomName: string;
  description: string;
}
