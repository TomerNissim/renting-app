import React, { useState, useCallback } from "react";
import "./map.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
require("dotenv").config();
interface IProps {
  cords: {
    lat: number;
    lng: number;
  };
  isUpload: boolean;
}
const libraries = ["places"];

function Map({ cords, isUpload }: IProps) {
  let libRef: any = React.useRef(libraries);

  const [mapContainerStyle, setMapContainerStyle] = useState(
    isUpload
      ? {
          height: "41vh",
          width: "40vw",
        }
      : {
          height: "81vh",
          width: "55vw",
        }
  );
  const [options] = useState({
    disableDefaultUI: false,
    zoomControl: true,
  });
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY
      ? process.env.REACT_APP_API_KEY
      : "",
    libraries: libRef.current,
  });

  const mapRef: React.MutableRefObject<any> = React.useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <div>
      {loadError && <span>"Error"</span>}
      {!isLoaded && <span>"Loading..."</span>}
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={cords}
        options={options}
        onLoad={onMapLoad}
      >
        {cords && <Marker position={cords} />}
      </GoogleMap>
    </div>
  );
}

export default Map;
