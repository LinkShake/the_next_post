import { AuthContext } from "components/AuthContext";

import { CreateRoomButton } from "components/CreateRoomButton/CreateRoomButton";
import { Room } from "interfaces/Room";
import Link from "next/link";
import "../app.css";
import "./style.css";

export default async function App() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/fetchRooms`);
    const data: Room[] | undefined = await res.json();
    console.log(process.env.BASE_URL);

    return (
      <AuthContext>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          {data?.map(({ _id, roomName }) => {
            return (
              <div key={_id} className="room-preview-div">
                <Link
                  href={`/room/${roomName.toLowerCase()}?id=${_id}`}
                  className="room-preview-link"
                >
                  {roomName}
                </Link>
              </div>
            );
          })}
        </ul>
        <CreateRoomButton />
      </AuthContext>
    );
  } catch (err: any) {
    return <div>error</div>;
  }
}
