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
      await dbConnect();

      if (method === "POST") {
        await Room.create({
          roomName: body.roomName.toLowerCase().trim(),
          description: body.description,
          posts: [],
        });

        res.redirect("/home");
        res.status(200).json({ msg: "success" });
      } else {
        res.status(405).json({ msg: "Invalid fetch method" });
      }
    } catch (err: any) {
      console.log(err);
    }
  } else {
    res.status(401).json({ err: "Not authenticated request" });
  }
}
