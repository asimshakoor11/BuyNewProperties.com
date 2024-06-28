import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const locations = [
  {
    id: 1,
    position: { lat: 32.645, lng: -16.939 },
    info: 'from 575.000€ to 1.100.000€ - New development Funchal, Sé, Madeira Island'
  },
  {
    id: 2,
    position: { lat: 32.648, lng: -16.932 },
    info: 'Another location'
  }
];



const CustomMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAz8XY-mr9AEXYq-HoUjLa4q1odrW2Qshw"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className='h-[95vh] w-full sticky top-5'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount} 
           >
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>

  ) : <></>
}

export default React.memo(CustomMap)

