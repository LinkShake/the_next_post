import { Room } from "interfaces/Room";
import Link from "next/link";

export default async function Page({
  params,
  searchParams,
}: {
  params: { roomName: string };
  searchParams: any;
}) {
  const { roomName } = params;
  let res;

  if (roomName.length) {
    res = await fetch(`${process.env.BASE_URL}/api/search`, {
      method: "POST",
      body: JSON.stringify({
        value: roomName[0],
        originalURL: `/search/${roomName[0]}`,
      }),
    });
  } else {
    return <div>No rooms matching your search params</div>;
  }

  const dataToDisplay: Room[] | undefined = await res.json();

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
            <div className="users-displayer">
              {/* <IoStarOutline /> */}
              {usersNum}
            </div>
          </div>
        );
      })}
    </ul>
  );
}
