import { TextInput } from "react-native-paper";

const PricePicker = ({ onPriceChange, price }: propsType) => {
  const handlePriceChange = (newPrice: string) => {
    const regex = /^\+?([1-9]\d*)$/;
    if (!newPrice || regex.test(newPrice)) onPriceChange(newPrice);
  };

  return (
    <TextInput
      value={price}
      onChangeText={handlePriceChange}
      mode="outlined"
      style={{ minWidth: "80%" }}
      label={"Price"}
    />
  );
};

type propsType = {
  price: string;
  onPriceChange: (newPrice: string) => void;
};

export default PricePicker;
