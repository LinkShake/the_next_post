"use client";
import { AuthContext } from "components/AuthContext";
import { PostData } from "interfaces/PostsData";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>(title);
  const [postContent, setPostContent] = useState<string>(body);
  const router = useRouter();
  const apiData = {
    roomId,
    roomName,
    id: _id,
    title,
    content: body,
    author,
  };
  const editData = {
    roomId,
    roomName,
    id: _id,
    author,
    title: postTitle,
    content: postContent,
  };

  return (
    <AuthContext>
      <div className="post-card">
        <h2>Post by {author}</h2>
        {!isEditing ? (
          <>
            <h2>{title}</h2>
            <p>{body}</p>
          </>
        ) : (
          <>
            <input
              type="text"
              name="new-post-title"
              id="new-post-title"
              // @ts-ignore
              minLength="5"
              // @ts-ignore
              maxLength="20"
              placeholder="Title of your post (optional)"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <textarea
              name="new-post-content"
              id="new-post-content"
              // @ts-ignore
              minLength="1"
              // @ts-ignore
              maxLength="150"
              placeholder="Content of your post..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            ></textarea>
          </>
        )}
        <div className="button-wrapper">
          <button
            className="app-button"
            type="button"
            onClick={async (e) => {
              e.preventDefault();
              try {
                // console.log(process.env.BASE_URL);
                await fetch("/api/deletePost", {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(apiData),
                });
                router.refresh();
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
              console.log(editData);
              if (!isEditing) {
                setIsEditing(true);
              } else {
                setIsEditing(false);
                try {
                  await fetch("/api/editPost", {
                    method: "PUT",
                    body: JSON.stringify(editData),
                  });
                  router.refresh();
                } catch (err: any) {
                  console.log(err.message);
                }
              }
            }}
          >
            {isEditing ? "Done" : "Edit"}
          </button>
        </div>
      </div>
    </AuthContext>
  );
};
