"use client";
import { useState } from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import "./Searchbar.css";

export const Searchbar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  // const router = useRouter();

  return (
    <div className="search-component">
      <input
        type="text"
        className="search-input"
        // @ts-ignore
        minLength="6"
        // @ts-ignore
        maxLength="30"
        placeholder="search for a room..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Link
        href={`/search/${inputValue.toLowerCase()}`}
        className="app-button"
        id="search-button"
      >
        Search
      </Link>
    </div>
  );
};
