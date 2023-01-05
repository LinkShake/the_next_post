import { AuthContext } from "components/AuthContext";
// import { IoStarOutline, IoStar } from "react-icons/io5";
// import { NewPostButton } from "components/NewPostButton/NewPostButton";
// import { PostData } from "interfaces/PostsData";
// import { Post } from "../../components/Post/Post";
import { CreateRoomButton } from "components/CreateRoomButton/CreateRoomButton";
import { Room } from "interfaces/Room";
import Link from "next/link";
import "../app.css";
import "./style.css";

export default async function App() {
  try {
    // const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
    // const data = await res.json();
    // const dataArr: PostData[] = data?.data;
    const res = await fetch(`${process.env.BASE_URL}/api/fetchRooms`);
    const data: Room[] | undefined = await res.json();
    console.log(process.env.BASE_URL);

    // console.log(data);
    return (
      <AuthContext>
        <ul
          style={{
            listStyle: "none",
          }}
        >
          {data?.map(({ _id, roomName }) => {
            // console.log(usersNum);
            return (
              <div key={_id} className="room-preview-div">
                <Link
                  href={`/room/${roomName.toLowerCase()}?id=${_id}`}
                  className="room-preview-link"
                >
                  {roomName.toUpperCase()}
                </Link>
              </div>
            );
          })}
        </ul>
        {/* <div className="home-grid">
          <UserCard /> */}
        {/* <div className="posts-container">
          {dataArr.map((data) => (
            <Post data={data} key={data._id} />
          ))}
        </div>
        <NewPostButton /> */}
        <CreateRoomButton />
        {/* </div> */}
      </AuthContext>
    );
  } catch (err: any) {
    // console.log(err.message);
    return <div>error</div>;
  }
  // return <div>home</div>;
}
