import User from "@/components/admin/manage-admins/User";

export interface UserData {
  id: number;
  email: string;
  name: string;
  is_admin: number;
}

export default function ManageAdmins() {
  const users: UserData[] = [
    {
      id: 1,
      email: "admin@email.com",
      name: "Admin",
      is_admin: 1,
    },
    {
      id: 2,
      email: "user@email.com",
      name: "User",
      is_admin: 0,
    },
    {
      id: 2,
      email: "jessie@email.com",
      name: "Jessie",
      is_admin: 0,
    },
    {
      id: 2,
      email: "charlotte@email.com",
      name: "Charlotte",
      is_admin: 1,
    },
  ];

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Manage Admins</h1>

      <div className={"grid grid-cols-2 gap-5"}>
        <div>
          <h2 className={"mb-5 text-center text-lg font-bold"}>Admins</h2>
          <ul className={"w-full"}>
            {users
              .filter((user) => user.is_admin)
              .map((user) => (
                <User key={user.id} user={user} />
              ))}
          </ul>
        </div>
        <div>
          <h2 className={"mb-5 text-center text-lg font-bold"}>Customers</h2>
          <ul className={"w-full"}>
            {users
              .filter((user) => !user.is_admin)
              .map((user) => (
                <User key={user.id} user={user} />
              ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
