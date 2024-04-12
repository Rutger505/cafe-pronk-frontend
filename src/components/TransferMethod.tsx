interface TransferMethodProps {
  method: string;
  estimatedTime: string;
  active: boolean;
  onClick: () => void;
}

export default function TransferMethod({
  method,
  estimatedTime,
  active,
  onClick,
}: Readonly<TransferMethodProps>) {
  return (
    <button
      className={`${active ? "bg-primary" : "hover:bg-[#E5E3E1]"} flex flex-col items-center justify-center rounded-button px-8 py-1`}
      onClick={onClick}
    >
      <span className={"text-xs font-bold"}>{method}</span>
      <span className={"text-[12px]"}>{estimatedTime}</span>
    </button>
  );
}
