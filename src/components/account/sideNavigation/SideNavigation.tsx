import SideNavigationLink from "./SideNavigationLink";

export default function SideNavigation() {
  return (
    <nav className="ml-auto mt-32 flex w-fit flex-col">
      <SideNavigationLink href="/account">Accountoverzicht</SideNavigationLink>
      <SideNavigationLink href="/account/orders">
        Bestellingen
      </SideNavigationLink>
      <SideNavigationLink href="/account/reservations">
        Reservaties
      </SideNavigationLink>
      <SideNavigationLink href="/account/contact-messages">
        Contactberichten
      </SideNavigationLink>
    </nav>
  );
}
