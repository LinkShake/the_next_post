"use client";
import { AuthContext } from "components/AuthContext";
import { PostData } from "interfaces/PostsData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Linkify from "linkify-react";
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
  const { userName, email } = author;
  const { data: session, status } = useSession();
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
  const userCondition =
    status === "authenticated" &&
    session.user?.name === userName &&
    session.user.email === email;

  return (
    <AuthContext>
      <div className="post-card">
        {!isEditing ? (
          <>
            <Linkify as="h2">{title}</Linkify>
            <h2 id="post-author">by {userName}</h2>
            <Linkify as="p">{body}</Linkify>
          </>
        ) : (
          <div className="edit-data-post">
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
          </div>
        )}
        {userCondition && (
          <div className="button-wrapper">
            <button
              className="app-button"
              type="button"
              onClick={async (e) => {
                e.preventDefault();
                try {
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
        )}
      </div>
    </AuthContext>
  );
};
