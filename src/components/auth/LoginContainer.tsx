import Login from "@/components/auth/Login";
import { useState } from "react";
import Register from "@/components/auth/Register";

enum AuthType {
  Login,
  Register,
}

export default function LoginContainer() {
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
      <div className={"rounded-[4px] bg-primary p-14"}>
        {authType === AuthType.Login ? (
          <Login onRedirectToRegister={onRedirectToRegister} />
        ) : (
          <Register onRedirectToLogin={onRedirectToLogin} />
        )}
      </div>
    </div>
  );
}
