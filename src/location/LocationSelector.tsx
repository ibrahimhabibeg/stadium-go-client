import MapView, { Marker } from "react-native-maps";
import type { Region } from "react-native-maps";

const LocationSelector = ({ region, onRegionChange }: propsType) => {
  return (
    <MapView
      style={{ width: "80%", height: 400, marginTop: 5 }}
      region={region}
      onRegionChangeComplete={onRegionChange}
    >
      <Marker coordinate={region} />
    </MapView>
  );
};

export default LocationSelector;

type propsType = {
  region: Region;
  onRegionChange: (region: Region) => void;
};
