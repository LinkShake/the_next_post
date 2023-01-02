import { AuthContext } from "components/AuthContext";
import { Room } from "components/Room/Room";
import "../../app.css";

export default async function Page({
  params,
  searchParams,
}: {
  params: { roomName: string };
  searchParams: { id: string };
}) {
  const { id } = searchParams;
  let apiData = { id: id };
  let props;

  try {
    const res = await fetch(`${process.env.BASE_URL}/api/fetchRoomById`, {
      method: "POST",
      body: JSON.stringify(apiData),
      cache: "no-store",
    });
    props = await res.json();
  } catch (err: any) {
    console.log(err.message);
  }

  return (
    <AuthContext>
      <Room
        // @ts-ignore
        roomId={props._id}
        // @ts-ignore
        roomName={props.roomName}
        // @ts-ignore
        posts={props.posts}
        // @ts-ignore
        description={props.description}
      />
    </AuthContext>
  );
}
