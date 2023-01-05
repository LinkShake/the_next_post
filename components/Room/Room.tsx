"use client";
import { Post } from "components/Post/Post";
import { PostForm } from "components/PostForm/PostForm";
import { PostData } from "interfaces/PostsData";
import { useSession } from "next-auth/react";
import { useState } from "react";
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
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <div className="room-grid">
      <div className="room-main-grid">
        <div className="room-title">{roomName}</div>
        {modalState ? (
          <PostForm id={roomId} setModalState={setModalState} />
        ) : (
          <></>
        )}
        <ul className="posts-wrapper">
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
        </ul>
        <button
          className="app-button"
          onClick={() => setModalState(true)}
          style={{
            position: "absolute",
            right: "16vw",
          }}
        >
          Create post
        </button>
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
