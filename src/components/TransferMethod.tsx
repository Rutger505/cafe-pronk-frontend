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
      className={`${active ? "bg-primary" : "hover:bg-[#E5E3E1]"} rounded-button flex flex-col items-center justify-center px-8 `}
      onClick={onClick}
    >
      <span className={"text-xs font-bold"}>{method}</span>
      <span className={"text-[12px]"}>{estimatedTime}</span>
    </button>
  );
}
