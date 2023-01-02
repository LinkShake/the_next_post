import { AuthContext } from "../../components/AuthContext";
import { Navbar } from "components/Navbar/Navbar";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContext>
      {/* <div className="home-grid"> */}
      <Navbar />
      {children}
      {/* </div> */}
    </AuthContext>
  );
}
