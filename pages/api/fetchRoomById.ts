import Room from "./schemas/room";
import dbConnect from "@/utils/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { body } = req;

  try {
    const data = JSON.parse(body);
    await dbConnect();

    if (method === "POST") {
      const room = await Room.findById(data.id);

      res.status(200).json(room);
    } else {
      res.status(401).json({ msg: "Invalid fetch method" });
    }
  } catch (err: any) {
    console.log(err.message);
  }
}
