import { signOut } from "next-auth/react";
import "./ModalMenu.css";

export const ModalMenu = () => {
  return (
    <div className="modal-menu">
      <button onClick={() => signOut()} className="app-button">
        Log out
      </button>
    </div>
  );
};
