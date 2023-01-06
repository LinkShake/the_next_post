import "./RoomForm.css";
import "../../app/app.css";
import { Dispatch, SetStateAction, useEffect } from "react";

interface RoomFormProps {
  setModalState: Dispatch<SetStateAction<boolean>>;
}

export const RoomForm: React.FC<RoomFormProps> = ({
  setModalState,
}: {
  setModalState: Dispatch<SetStateAction<boolean>>;
}) => {
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
      className="room-form-overlay"
      onClick={(e) => {
        e.stopPropagation();
        // @ts-ignore
        if (e.target.classList.contains("room-form-overlay"))
          setModalState(false);
      }}
    >
      <form action="/api/createRoom" method="post" className="room-form">
        <button
          className="close-modal-button"
          onClick={() => setModalState(false)}
        >
          &times;
        </button>
        <label htmlFor="roomName">Room name</label>
        <input
          type="text"
          // @ts-ignore
          minLength="6"
          // @ts-ignore
          maxLength="30"
          required
          id="roomName"
          name="roomName"
          placeholder="Enter the name of the room..."
        />
        <label htmlFor="description">Description of the room</label>
        <textarea
          type="text"
          id="description"
          name="description"
          required
          // @ts-ignore
          minLength="5"
          // @ts-ignore
          maxLength="150"
          placeholder="Description of the room's content..."
        />
        <div className="button-container">
          <button
            type="submit"
            className="app-button"
            id="room-form-button"
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
