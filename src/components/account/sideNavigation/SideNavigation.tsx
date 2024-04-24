"use client";

import SideNavigationLink from "./SideNavigationLink";

export default function SideNavigation() {
  function onLogout() {
    localStorage.removeItem("token");
  }

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
      <SideNavigationLink href="/" onClick={onLogout}>
        Uitloggen
      </SideNavigationLink>
    </nav>
  );
}
