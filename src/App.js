import 'leaflet/dist/leaflet.css';
import './App.css'
import L from 'leaflet'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

function GetIcon(_iconSize) {
    return L.icon({
        iconUrl: require("./Icon/icons8-маркер-40.png"),
        iconSize: _iconSize
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
            <Marker position = {position} icon = {GetIcon(20)}>
                <Popup>
                    A pretty CSS3 popup. <br/>jf
                </Popup>
            </Marker>
        </MapContainer>
    );
}



export default App;
