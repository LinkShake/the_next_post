import Room from "./schemas/room";
import dbConnect from "@/utils/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { body } = req;
  console.log(body);

  const actualValue = body.value.replaceAll("%20", " ");
  const actualURL = body.originalURL.replaceAll("%20", " ");

  try {
    const data = {
      value: actualValue,
      originalURL: actualURL,
    };
    console.log(data);
    await dbConnect();

    if (method === "POST") {
      const rooms = await Room.find({
        roomName: data.value,
      });
      console.log(rooms);

      if (rooms) {
        // res.redirect(`/${data.originalURL}`);
        res.status(200).json(rooms);
      } else {
        throw new Error("No rooms corrisponding to your query");
      }
    }

    res.status(401).json({ msg: "Invalid fetch method" });
  } catch (err: any) {
    console.log(err.message);
  }
}
