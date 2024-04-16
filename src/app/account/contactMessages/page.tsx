import ContactMessage from "@/components/account/contactMessages/ContactMessage";

export interface ContactMessageData {
  id: number;
  user_id: number;
  name: string;
  business_name: string | null;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  updated_at: string;
}

export default function ContactMessages() {
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
      created_at: "2024-04-15T20:52:12.000000Z",
      updated_at: "2024-04-15T20:52:12.000000Z",
    },
  ];

  return (
    <main>
      <h1 className={"mb-10 text-center text-xl"}>Contact berichten</h1>
      <ul className={"w-full"}>
        {contactMessages.map((contactMessage) => (
          <ContactMessage
            key={contactMessage.id}
            contactMessage={contactMessage}
          />
        ))}
      </ul>
    </main>
  );
}
