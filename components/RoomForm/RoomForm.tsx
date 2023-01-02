import "./RoomForm.css";
import "../../app/app.css";

export const RoomForm = () => {
  return (
    <form action="/api/createRoom" method="post" className="room-form">
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
      <button type="submit" className="app-button" id="room-form-button">
        Submit
      </button>
    </form>
  );
};
