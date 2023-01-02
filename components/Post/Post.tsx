"use client";
import { AuthContext } from "components/AuthContext";
import { PostData } from "interfaces/PostsData";
import { useRouter } from "next/navigation";
import "./Post.css";

interface PostProps {
  data: PostData;
  roomId: string;
  roomName: string;
}

export const Post: React.FC<PostProps> = ({
  data,
  roomId,
  roomName,
}: {
  data: PostData;
  roomId: string;
  roomName: string;
}) => {
  const { _id, title, body, author } = data;
  const apiData = {
    roomId,
    roomName,
    id: _id,
    title,
    content: body,
    author,
  };

  const router = useRouter();

  // console.log(apiData);

  return (
    <AuthContext>
      <div className="post-card">
        <h2>Post by {author}</h2>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="button-wrapper">
          <button
            className="app-button"
            onClick={async () => {
              try {
                const res = await fetch(
                  `${process.env.BASE_URL}/api/deletePost`,
                  {
                    method: "DELETE",
                    body: JSON.stringify(apiData),
                  }
                );
                console.log(res);
                const data = await res.json();

                console.log(data);
              } catch (err: any) {
                console.log(err.message);
              }
            }}
          >
            Delete
          </button>
          <button
            className="app-button"
            onClick={async () => {
              // await fetch(`${process.env.BASE_URL}/api/editPost`, {
              //   method: "PUT",
              //   body: JSON.stringify(editData),
              // });
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </AuthContext>
  );
};
