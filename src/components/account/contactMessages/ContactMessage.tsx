import { ContactMessageData } from "@/app/account/contactMessages/page";

interface ContactMessageProps {
  contactMessage: ContactMessageData;
}

export default function ContactMessage({
  contactMessage,
}: Readonly<ContactMessageProps>) {
  const createdAtObject = new Date(contactMessage.created_at);
  const createdAtDate = createdAtObject.toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const createdAtTime = createdAtObject.toLocaleTimeString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={"mb-5 rounded-normal border-2 border-secondary p-6"}>
      <div>
        <h2 className={"text-lg font-semibold"}>{contactMessage.subject}</h2>
        <p className={"text-sm"}>
          Verstuurd op {createdAtDate} om {createdAtTime}
        </p>
        <p>
          Verstuurd door {contactMessage.name},{" "}
          {contactMessage.business_name && `${contactMessage.business_name}, `}
          {contactMessage.email}
        </p>
      </div>
      <p className={"mt-4"}>{contactMessage.message}</p>
    </div>
  );
}