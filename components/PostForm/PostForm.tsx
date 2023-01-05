"use client";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import "./PostForm.css";

interface PostFormProps {
  id: string;
  setModalState: Dispatch<SetStateAction<boolean>>;
}
export const PostForm: React.FC<PostFormProps> = ({
  id,
  setModalState,
}: {
  id: string;
  setModalState: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data: session } = useSession();

  useEffect(() => {
    const onEscapeKeyDown = (e: KeyboardEvent) => {
      console.log(e);
      if (e.key === "Escape") {
        setModalState(false);
      }
    };
    window.addEventListener("keydown", onEscapeKeyDown);

    return () => window.removeEventListener("keydown", onEscapeKeyDown);
  });

  return (
    <div
      className="post-form-overlay"
      onClick={(e) => {
        e.stopPropagation();
        // @ts-ignore
        if (e.target.classList.contains("post-form-overlay"))
          setModalState(false);
      }}
    >
      <form action="/api/createPost" method="post" className="post-form">
        <button
          className="close-modal-button"
          onClick={() => setModalState(false)}
        >
          &times;
        </button>
        <label htmlFor="author"></label>
        <input
          type="text"
          required
          id="author"
          name="author"
          readOnly
          // @ts-ignore
          value={session?.user?.name}
          style={{
            display: "none",
            backgroundColor: "var(--primary-color-700)",
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
        <div className="button-container">
          <button
            type="submit"
            className="app-button"
            style={{
              position: "absolute",
              right: ".75vw",
              margin: "20px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
