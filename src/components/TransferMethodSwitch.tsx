import TransferMethod from "@/components/TransferMethod";
import { useState } from "react";

enum TransferMethodEnum {
  Delivery = "Delivery",
  Pickup = "Pickup",
}

export default function TransferMethodSwitch() {
  const [selectedMethod, setSelectedMethod] = useState(
    TransferMethodEnum.Delivery,
  );

  return (
    <div className={"rounded-button flex h-12 w-fit bg-secondary p-[2px]"}>
      <TransferMethod
        method={"Delivery"}
        estimatedTime={"30-40 min"}
        active={selectedMethod == TransferMethodEnum.Delivery}
        onClick={() => setSelectedMethod(TransferMethodEnum.Delivery)}
      />
      <TransferMethod
        method={"Pickup"}
        estimatedTime={"20-30 min"}
        active={selectedMethod == TransferMethodEnum.Pickup}
        onClick={() => setSelectedMethod(TransferMethodEnum.Pickup)}
      />
    </div>
  );
}
