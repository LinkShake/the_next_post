"use client";
import "./CommentsSection.css";
import { useState } from "react";
import { useImmer } from "use-immer";
import { Comments } from "interfaces/Comments";
import Linkify from "linkify-react";

interface CommentsProps {
  roomId: string;
  roomName: string;
  id: string;
  author: {
    userName: string;
    email: string;
  };
  comments: Comments[];
}

export const CommentsSection: React.FC<CommentsProps> = ({
  roomId,
  roomName,
  id,
  author,
  comments,
}: {
  roomId: string;
  roomName: string;
  id: string;
  author: {
    userName: string;
    email: string;
  };
  comments: Comments[];
}) => {
  const [commentContent, setCommentContent] = useState<string>("");
  const [commentsArray, setCommentsArray] = useImmer<Comments[]>(comments);

  return (
    <div className="comments-section">
      {commentsArray.map(({ author, body }, idx) => {
        return (
          <div className="current-comment" key={idx}>
            <h2>{author.userName}</h2>
            <Linkify as="p">{body}</Linkify>
          </div>
        );
      })}
      <form action="/api/postComment" method="post">
        <label htmlFor="author_name"></label>
        <input
          type="text"
          id="author_name"
          name="author_name"
          required
          value={author.userName}
          onChange={() => {}}
          style={{
            display: "none",
          }}
        />
        <label htmlFor="author_email"></label>
        <input
          type="text"
          id="author_email"
          name="author_email"
          required
          value={author.email}
          onChange={() => {}}
          style={{
            display: "none",
          }}
        />
        <label htmlFor="roomId"></label>
        <input
          type="text"
          id="roomId"
          name="roomId"
          required
          value={roomId}
          onChange={() => {}}
          style={{
            display: "none",
          }}
        />
        <label htmlFor="roomName"></label>
        <input
          type="text"
          id="roomName"
          name="roomName"
          required
          value={roomName}
          onChange={() => {}}
          style={{
            display: "none",
          }}
        />
        <label htmlFor="id"></label>
        <input
          type="text"
          id="id"
          name="id"
          required
          value={id}
          onChange={() => {}}
          style={{
            display: "none",
          }}
        />
        <label htmlFor="content"></label>
        <input
          type="text"
          id="content"
          name="content"
          required
          //   @ts-ignore
          minLength="1"
          //   @ts-ignore
          maxLength="30"
          placeholder="Write your comment here..."
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
