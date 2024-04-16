import SideNavigationLink from "./SideNavigationLink";

export default function SideNavigation() {
  return (
    <nav className="ml-auto mt-32 flex w-fit flex-col">
      <SideNavigationLink href="/admin">Dashboard</SideNavigationLink>
      <SideNavigationLink href="/admin/contactMessages">
        Contact berichten
      </SideNavigationLink>
      <SideNavigationLink href="/admin/menu">Menu beheren</SideNavigationLink>
      <SideNavigationLink href="/admin/reservations">
        Reservaties beheren
      </SideNavigationLink>
      <SideNavigationLink href="/admin/contactMessages">
        Admins beheren
      </SideNavigationLink>
    </nav>
  );
}
