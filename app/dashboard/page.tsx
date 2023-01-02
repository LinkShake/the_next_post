import { AppProps } from "next/app";
import { AuthContext } from "../../components/AuthContext";
import { Dashboard } from "../../components/Dashboard";

export default function Page({ pageProps }: AppProps) {
  return (
    <AuthContext>
      <Dashboard />
    </AuthContext>
  );
}
