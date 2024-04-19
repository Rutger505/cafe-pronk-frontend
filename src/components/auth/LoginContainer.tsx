import Login from "@/components/auth/Login";
import { useState } from "react";
import Register from "@/components/auth/Register";

enum AuthType {
  Login,
  Register,
}

interface LoginContainerProps {
  onLoginSuccess: () => void;
  onLoginClose: () => void;
}

export default function LoginContainer({
  onLoginSuccess,
  onLoginClose,
}: Readonly<LoginContainerProps>) {
  const [authType, setAuthType] = useState(AuthType.Login);

  function onRedirectToRegister() {
    setAuthType(AuthType.Register);
  }

  function onRedirectToLogin() {
    setAuthType(AuthType.Login);
  }

  return (
    <div
      className={
        "fixed inset-0 flex items-center justify-center bg-[#000] bg-opacity-40"
      }
    >
      <div className={"relative rounded-[4px] bg-primary p-14"}>
        {authType === AuthType.Login ? (
          <Login
            onRedirectToRegister={onRedirectToRegister}
            onLoginSuccess={onLoginSuccess}
          />
        ) : (
          <Register
            onRedirectToLogin={onRedirectToLogin}
            onRegisterSuccess={onLoginSuccess}
          />
        )}

        <button className={"absolute right-5 top-5"} onClick={onLoginClose}>
          ✖
        </button>
      </div>
    </div>
  );
}
