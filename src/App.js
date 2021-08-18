import 'leaflet/dist/leaflet.css';
import './App.css'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'
import icon from "./Icon/icon.png"
import { Rate} from "antd";

function GetIcon(){
    return L.icon({
        iconUrl: icon,
    })
}

function App() {
    const position = [51.505, -0.09]

    return(
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon = {GetIcon()}>
                <Popup>
                    <p>Some important place</p>
                    <Rate></Rate>
                </Popup>
            </Marker>
        </MapContainer>
    );
}


export default App;
