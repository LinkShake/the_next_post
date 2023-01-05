import { NextApiRequest, NextApiResponse } from "next";
import Room from "./schemas/room";
import dbConnect from "@/utils/dbConnection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    await dbConnect();
    if (method === "GET") {
      const rooms = await Room.find({}).limit(10);

      res.status(200).json(rooms);
    } else {
      res.status(405).json({ msg: "Invalid fetch method" });
    }
  } catch (err: any) {
    console.log(err);
  }
}
