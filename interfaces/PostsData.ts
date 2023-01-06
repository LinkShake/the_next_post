export interface PostData {
  _id: string;
  author: {
    userName: string;
    email: string;
  };
  title: string;
  body: string;
  __v: number;
}
