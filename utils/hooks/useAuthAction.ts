import { useSession, signIn } from "next-auth/react";

export const useAuthAction = (cb: () => void) => {
  const { status } = useSession();

  if (status === "authenticated") {
    cb();
  } else {
    signIn();
  }
};
