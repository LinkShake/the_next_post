"use client";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import { ModalMenu } from "components/ModalMenu/ModalMenu";
import { Searchbar } from "components/Searchbar/Searchbar";
import Image from "next/image";
import "./Navbar.css";

export const Navbar = () => {
  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <nav className="main-nav">
      <Searchbar />
      {status === "authenticated" ? (
        <div>
          <div
            className="authenticated-user-data"
            onClick={() => setShowModal(!showModal)}
          >
            <span>{session.user?.name}</span>
            <Image
              // @ts-ignore
              src={session.user?.image}
              alt="user-profile"
              className="user-profile"
              width={60}
              height={60}
            />
          </div>
          {showModal && <ModalMenu />}
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className="app-button"
          style={{
            position: "absolute",
            right: ".75vw",
            top: ".75vw",
          }}
        >
          Sign In
        </button>
      )}{" "}
    </nav>
  );
};
