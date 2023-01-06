import Room from "./schemas/room";
import dbConnect from "@/utils/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    const { method } = req;
    const { body } = req;

    try {
      const data = JSON.parse(body);
      await dbConnect();
      console.log(data.id);

      if (method === "PUT") {
        const room = await Room.findById(data.roomId);

        room.posts.forEach((postData: any, idx: number) => {
          if (postData._id == data.id) {
            room.posts[idx].title = data.title;
            room.posts[idx].body = data.content;
          }
        });

        await room.save();

        res.status(200).json({ msg: "Success" });
      } else res.status(405).json({ msg: "Invalid fetch method" });
    } catch (err: any) {
      console.log(err.message);
    }
  } else {
    res.status(401).json({ err: "Not authenticated request" });
  }
}
