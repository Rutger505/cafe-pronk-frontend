import TransferMethod from "./TransferMethod";
import { useState } from "react";

enum TransferMethodEnum {
  Delivery = "Delivery",
  Pickup = "Pickup",
}

interface TransferMethodSwitchProps {
  onDeliveryTimeChange: (newDeliveryTime: number) => void;
}

export default function TransferMethodSwitch({
  onDeliveryTimeChange,
}: Readonly<TransferMethodSwitchProps>) {
  const [selectedMethod, setSelectedMethod] = useState(
    TransferMethodEnum.Delivery,
  );

  function onDeliveryTransferMethod() {
    setSelectedMethod(TransferMethodEnum.Delivery);
    onDeliveryTimeChange(40);
  }

  function onPickupTransferMethod() {
    setSelectedMethod(TransferMethodEnum.Pickup);
    onDeliveryTimeChange(30);
  }

  return (
    <div className={"flex w-fit rounded-button bg-secondary p-[2px]"}>
      <TransferMethod
        method={"Delivery"}
        estimatedTime={"30-40 min"}
        active={selectedMethod == TransferMethodEnum.Delivery}
        onClick={onDeliveryTransferMethod}
      />
      <TransferMethod
        method={"Pickup"}
        estimatedTime={"20-30 min"}
        active={selectedMethod == TransferMethodEnum.Pickup}
        onClick={onPickupTransferMethod}
      />
    </div>
  );
}
