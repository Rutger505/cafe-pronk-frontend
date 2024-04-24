"use client";

import { useEffect, useState } from "react";

type LoggedInUserData = {
  logged_in: true;
  id: number;
  email: string;
  name: string;
  is_admin: boolean;
  token: string;
};

type NotLoggedInUserData = {
  logged_in: false;
};

export type UserData = LoggedInUserData | NotLoggedInUserData;

async function fetchUser(): Promise<UserData> {
  const apiUri = `${process.env.NEXT_PUBLIC_API_URL}/user`;
  const token = localStorage.getItem("token");

  if (!token) {
    return { logged_in: false };
  }

  const response = await fetch(apiUri, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  const body = await response.json();

  if (response.ok) {
    return {
      logged_in: true,
      ...body,
      token,
    };
  } else {
    return {
      logged_in: false,
    };
  }
}

export default function useUser(): [UserData | null, () => void] {
  const [user, setUser] = useState<null | UserData>(null);

  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  function refreshUser() {
    fetchUser().then(setUser);
  }

  return [user, refreshUser];
}
