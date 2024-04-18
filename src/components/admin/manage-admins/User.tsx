import { UserData } from "@/app/admin/manage-admins/page";

interface UserProps {
  user: UserData;
}

export default function User({ user }: Readonly<UserProps>) {
  return (
    <div className={"mb-5 rounded-normal border-2 border-secondary p-5"}>
      <div className={"mb-2 flex items-center justify-between"}>
        <h3 className={"text-md font-bold"}>{user.name}</h3>
        {user.is_admin ? (
          <button className={"font-bold text-[#f00]"}>✕</button>
        ) : (
          <button className={"-mt-2 text-xl font-light leading-3 text-[#0f0]"}>
            +
          </button>
        )}
      </div>
      <p>{user.email}</p>
    </div>
  );
}
