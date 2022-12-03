import React, { useEffect} from "react";
import { MapContainer, TileLayer,useMap } from 'react-leaflet';
import './DisplayMap.css'
import L from 'leaflet'

const position = [51.505, -0.09];
function ResetCentreView(props){
  const {coordinates} = props;
  const map = useMap();
  console.log("Reset"+coordinates);
  useEffect(() => {
    if(coordinates){
      map.setView(
        L.latLng(coordinates?.lat,coordinates?.lng),
        map.getZoom(),
        {
          animate:true
        })
    }
  },[coordinates]);
  return null
 }

function MapComponent(props) {
  const {coordinates} = props
  console.log("Map"+coordinates);
  return (
    <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ResetCentreView coordinates={coordinates} />
    </MapContainer>
  );
}

export default MapComponent;
