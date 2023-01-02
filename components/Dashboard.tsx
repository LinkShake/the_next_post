"use client";
import { useSession } from "next-auth/react";

export const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    // @ts-ignore
    return <div>{session?.user.name}</div>;
  }

  return <a href={`${process.env.BASE_URL}/api/auth/signin`}>Sign in</a>;
};
