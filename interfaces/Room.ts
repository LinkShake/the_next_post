export interface Room {
  _id: string;
  roomName: string;
  description: string | undefined;
  posts: any[];
  usersNum: number;
  __v: number;
}
