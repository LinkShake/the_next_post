import dbConnect from "@/utils/dbConnection";
import Room from "./schemas/room";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { PostData } from "interfaces/PostsData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    const { method } = req;
    const { body } = req;
    const data = body;
    console.log(data);
    try {
      await dbConnect();

      if (method === "POST") {
        const room = await Room.findById(data.roomId);

        room.posts.forEach((postData: PostData, idx: number) => {
          if (postData._id == data.id) {
            console.log(room.posts[idx].comments);
            room.posts[idx].comments.push({
              author: {
                userName: data.author_name,
                email: data.author_email,
              },
              body: data.content,
            });
          }
        });

        await room.save();

        res.redirect(`/room/${data.roomName}?id=${data.roomId}`);
        res.status(200).json({ msg: "Success!" });
      } else {
        res.status(405).json({ msg: "Invalid fetch method" });
      }
    } catch (err: any) {
      console.log(err.message);
    }
  } else {
    res.status(401).json({ err: "Not authenticated request" });
  }
}
