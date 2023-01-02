import { Navbar } from "components/Navbar/Navbar";
import { AuthContext } from "../../../components/AuthContext";
import "../../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext>
      <Navbar />
      {children}
    </AuthContext>
  );
}
