import { useEffect, useState } from "react";

type LoggedInUserData = {
  logged_in: true;
  id: number;
  email: string;
  name: string;
  is_admin: number;
};

type NotLoggedInUserData = {
  logged_in: false;
};

export type UserData = LoggedInUserData | NotLoggedInUserData;

export default function useUser(): null | UserData {
  const [user, setUser] = useState<null | UserData>(null);

  const apiUri = `${process.env.NEXT_PUBLIC_API_URL}/user`;
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUser() {
      if (!token) {
        setUser({ logged_in: false });
        return;
      }

      const response = await fetch(apiUri, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const body = await response.json();

      if (response.ok) {
        setUser(body);
      } else {
        setUser({
          logged_in: false,
        });
      }
    }

    fetchUser();
  }, [apiUri, token]);

  return user;
}
