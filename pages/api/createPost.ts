import dbConnect from "@/utils/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";
import Room from "./schemas/room";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    const { method } = req;
    const { body } = req;
    const data = body;
    try {
      await dbConnect();

      if (method === "POST") {
        await Room.updateOne(
          { _id: data.roomId },
          {
            $push: {
              posts: {
                author: {
                  userName: data.author_name,
                  email: data.author_email,
                },
                title: data.title,
                body: data.content,
              },
            },
          }
        );

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
