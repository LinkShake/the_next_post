"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import "./CreateRoomButton.css";

export const CreateRoomButton = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <Link
        href={`/new-room?user=${session?.user?.name}`}
        className="app-button"
        id="create-room-button-authenticated"
      >
        Create room
      </Link>
    );
  } else {
    return (
      <button
        onClick={() => signIn()}
        className="app-button"
        id="create-room-button-not-authenticated"
      >
        Create room
      </button>
    );
  }
};
