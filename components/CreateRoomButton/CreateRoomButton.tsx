"use client";
import { RoomForm } from "components/RoomForm/RoomForm";
import { useState } from "react";
import "./CreateRoomButton.css";

export const CreateRoomButton = () => {
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <>
      <button
        className="app-button"
        id="create-room-button"
        onClick={() => setModalState(true)}
      >
        Create room
      </button>
      {modalState && <RoomForm setModalState={setModalState} />}
    </>
  );

  // if (status === "authenticated") {
  //   return (
  //     <Link
  //       href={`/new-room?user=${session?.user?.name}`}
  //       className="app-button"
  //       id="create-room-button-authenticated"
  //     >
  //       Create room
  //     </Link>
  //   );
  // } else {
  //   return (
  //     <button
  //       onClick={() => signIn()}
  //       className="app-button"
  //       id="create-room-button-not-authenticated"
  //     >
  //       Create room
  //     </button>
  //   );
  // }
};
