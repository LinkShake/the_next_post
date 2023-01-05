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

  try {
    const data = body;
    console.log(data);
    await dbConnect();

    if (method === "DELETE") {
      await Room.updateOne(
        { _id: data.roomId },
        {
          $pull: {
            posts: {
              _id: data.id,
              author: data.author,
              title: data.title,
              body: data.content,
            },
          },
        }
      );

      //   res.redirect(`/${data.roomName}?id=${data.roomId}`);
      res.status(200).json({ msg: "Success" });
    } else {
      res.status(401).json({ msg: "Invalid fetch method" });
    }
  } catch (err: any) {
    console.log(err);
  }
}
