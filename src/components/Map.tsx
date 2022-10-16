import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const Map = ({ location }: any) => {
  return (
    <MapContainer className="h-[70vh] relative -z-10" center={[location.location.lat, location.location.lng]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker position={[location.location.lat, location.location.lng]}>
            <Popup>
              `${location.location.city}, ${location.location.region}`
            </Popup>
        </Marker>
    </MapContainer>
  )
}

export default Map