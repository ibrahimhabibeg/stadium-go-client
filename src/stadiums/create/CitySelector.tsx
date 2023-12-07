import DropDown from "react-native-paper-dropdown";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import getCitiesQuery from "./getCitiesQuery";

const CitySelector = ({ cityId, onChangeCity }: propsType) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const { data, loading } = useQuery(getCitiesQuery);

  return (
    <DropDown
      label={"City"}
      mode={"outlined"}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={cityId}
      setValue={onChangeCity}
      list={
        loading
          ? []
          : data.cities.map(({ id, name }) => ({ value: id, label: name }))
      }
    />
  );
};

type propsType = {
  cityId: string;
  onChangeCity: (cityId: string) => void;
};

export default CitySelector;
