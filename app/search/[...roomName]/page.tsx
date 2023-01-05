import { Room } from "interfaces/Room";
import Link from "next/link";
import "./style.css";

export default async function Page({
  params,
  searchParams,
}: {
  params: { roomName: string };
  searchParams: any;
}) {
  const { roomName } = params;
  const res = await fetch(`${process.env.BASE_URL}/api/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value: roomName[0],
      originalURL: `/search/${roomName[0]}`,
    }),
  });

  const dataToDisplay: Room[] | undefined = await res.json();

  if (dataToDisplay?.length) {
    return (
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {dataToDisplay?.map(({ _id, roomName, usersNum }) => {
          // console.log(usersNum);
          return (
            <div key={_id} className="room-preview-div">
              <Link
                href={`/room/${roomName.toLowerCase()}?id=${_id}`}
                className="room-preview-link"
              >
                {roomName}
              </Link>
              <div className="users-displayer">{usersNum}</div>
            </div>
          );
        })}
      </ul>
    );
  } else {
    return (
      <div className="no-rooms-found-div">
        No rooms corrisponding to your query...
      </div>
    );
  }
}
