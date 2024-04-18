import { ContactMessageData } from "@/ContactMessageData";
import ContactMessage from "@/components/account/contactMessages/ContactMessage";

export default function ManageContactMessages() {
  // demo contact messages json
  const contactMessages: ContactMessageData[] = [
    {
      id: 3,
      user_id: 2,
      name: "User",
      business_name: null,
      email: "user@email.com",
      subject: "Question about reservation",
      message:
        "Hi, I have a question about the reservation process. How do I make a reservation?",
      read: true,
      created_at: "2024-04-15T20:52:12.000000Z",
      updated_at: "2024-04-15T20:52:12.000000Z",
    },
    {
      id: 5,
      user_id: 2,
      name: "User",
      business_name: "Barry bakt",
      email: "user@email.com",
      subject: "Question about reservation",
      message:
        "Hi, I have a question about the reservation process. How do I make a reservation?",
      read: false,
      created_at: "2024-04-15T20:52:12.000000Z",
      updated_at: "2024-04-15T20:52:12.000000Z",
    },
  ];

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Contact berichten</h1>
      <h2 className={"mb-5 text-lg font-bold"}>Ongelezen berichten</h2>
      <ul className={"w-full"}>
        {contactMessages
          .filter((contactMessage) => !contactMessage.read)
          .map((contactMessage) => (
            <ContactMessage
              key={contactMessage.id}
              contactMessage={contactMessage}
              admin
            />
          ))}
      </ul>

      <h2 className={"mb-5 text-lg font-bold"}>Alle berichten</h2>
      <ul className={"w-full"}>
        {contactMessages.map((contactMessage) => (
          <ContactMessage
            key={contactMessage.id}
            contactMessage={contactMessage}
            admin
          />
        ))}
      </ul>
    </main>
  );
}
