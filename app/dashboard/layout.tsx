import { AuthContext } from "../../components/AuthContext";
import { LoginButton } from "../../components/LoginButton";

export interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <AuthContext>
      <LoginButton />
      {children}
    </AuthContext>
  );
}
