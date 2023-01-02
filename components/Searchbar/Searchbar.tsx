"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Searchbar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        // @ts-ignore
        minLength="6"
        // @ts-ignore
        maxLength="30"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(e.target.value);
        }}
      />
      <Link href={`/search/${inputValue}`}>search</Link>
    </form>
  );
};
