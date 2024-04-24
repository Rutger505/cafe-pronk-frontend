"use client";

import User from "@/components/admin/manage-admins/User";
import { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import axios, { AxiosError } from "axios";

export interface UserData {
  id: number;
  email: string;
  name: string;
  is_admin: number;
}

export default function ManageAdmins() {
  const [accounts, setAccounts] = useState<UserData[]>([]);
  const [user] = useUser();

  useEffect(() => {
    async function fetchAccounts() {
      if (!user?.logged_in) {
        return;
      }

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      setAccounts(response.data);
    }

    fetchAccounts();
  }, [user]);

  async function onAddAdmin(addedUser: UserData) {
    if (!user?.logged_in) {
      console.error("User not logged in");
      return;
    }

    console.log("Adding admin", addedUser);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/${addedUser.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      console.log(response);

      setAccounts((prevAccounts) =>
        prevAccounts.map((prevAccount) =>
          prevAccount.id === addedUser.id
            ? { ...prevAccount, is_admin: 1 }
            : prevAccount,
        ),
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Failed to add admin", error.response?.data);
      } else {
        console.error("Failed to add admin", error);
      }
    }
  }

  async function onRemoveAdmin(removedUser: UserData) {
    if (!user?.logged_in) {
      console.error("User not logged in");
      return;
    }

    console.log("Removing admin", removedUser);

    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/${removedUser.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      console.log(response);

      setAccounts((prevAccounts) =>
        prevAccounts.map((prevAccount) =>
          prevAccount.id === removedUser.id
            ? { ...prevAccount, is_admin: 0 }
            : prevAccount,
        ),
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Failed to remove admin", error.response?.data);
      } else {
        console.error("Failed to remove admin", error);
      }
    }
  }

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Manage Admins</h1>

      <div className={"grid grid-cols-2 gap-5"}>
        <div>
          <h2 className={"mb-5 text-center text-lg font-bold"}>Admins</h2>
          <ul className={"w-full"}>
            {accounts
              .filter((user) => user.is_admin)
              .map((user) => (
                <User
                  key={user.id}
                  user={user}
                  onAddAdmin={onAddAdmin}
                  onRemoveAdmin={onRemoveAdmin}
                />
              ))}
          </ul>
        </div>
        <div>
          <h2 className={"mb-5 text-center text-lg font-bold"}>Customers</h2>
          <ul className={"w-full"}>
            {accounts
              .filter((user) => !user.is_admin)
              .map((user) => (
                <User
                  key={user.id}
                  user={user}
                  onAddAdmin={onAddAdmin}
                  onRemoveAdmin={onRemoveAdmin}
                />
              ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
