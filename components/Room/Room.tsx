"use client";
import { Post } from "components/Post/Post";
import { PostForm } from "components/PostForm/PostForm";
import { PostData } from "interfaces/PostsData";
import { useSession } from "next-auth/react";
import "./Room.css";

interface RoomProps {
  roomId: string;
  roomName: string;
  description: string;
  posts: PostData[] | any;
}

export const Room: React.FC<RoomProps> = ({
  roomId,
  roomName,
  description,
  posts,
}: {
  roomId: string;
  roomName: string;
  description: string;
  posts: PostData[] | any[];
}) => {
  const { status } = useSession();

  return (
    <div className="room-grid">
      <div className="room-main-grid">
        <div className="room-title">{roomName}</div>
        {status === "authenticated" ? <PostForm id={roomId} /> : <></>}
        {posts.map((data) => {
          return (
            <Post
              key={data._id}
              data={data}
              roomId={roomId}
              roomName={roomName}
            />
          );
        })}
      </div>
      <div className="room-description-card">
        <div className="room-description">
          <h2
            style={{
              fontSize: "1.25vw",
            }}
          >
            Description
          </h2>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};
