"use client";
import { useSession } from "next-auth/react";
import "./PostForm.css";

interface PostFormProps {
  id: string;
}
export const PostForm: React.FC<PostFormProps> = ({ id }: { id: string }) => {
  const { data: session } = useSession();

  return (
    <form action="/api/createPost" method="post" className="post-form">
      <label htmlFor="author">Author of the post</label>
      <input
        type="text"
        required
        id="author"
        name="author"
        readOnly
        // @ts-ignore
        value={session?.user?.name}
        style={{
          backgroundColor: "var(--primary-color-900)",
          fontSize: "1.35rem",
          border: "none",
        }}
      />
      <label htmlFor="roomId"></label>
      <input
        type="text"
        required
        id="roomId"
        name="roomId"
        readOnly
        value={id}
        style={{ display: "none" }}
      />
      <label htmlFor="title">Title of the post</label>
      <input
        type="text"
        id="title"
        name="title"
        // @ts-ignore
        minLength="5"
        // @ts-ignore
        maxLength="20"
        placeholder="Title of your post (optional)"
      />
      <label htmlFor="content">Content of the post</label>
      <textarea
        type="text"
        id="content"
        name="content"
        required
        // @ts-ignore
        minLength="1"
        // @ts-ignore
        maxLength="150"
        placeholder="Content of your post..."
      />
      <button
        type="submit"
        className="app-button"
        style={{
          transform: "translateX(25vw)",
          margin: "20px",
        }}
      >
        Submit
      </button>
    </form>
  );
};
