import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 39.3999,
  lng: -8.2245
};

const locations = [
  {
    id: 1,
    position: { lat: 38.7223, lng: -9.1393 },
    info: {
      image: '/images/homepage/dreamhomecontact.png',
      title: 'New Development Lisbon',
      location: 'Estrela, Lisbon',
      price: '€650,000',
      beds: '2 to 3 Beds from'
    }
  },
  {
    id: 2,
    position: { lat: 41.1579, lng: -8.6291 },
    info: {
      image: '/images/homepage/dreamhomecontact.png',
      title: 'New Development Porto',
      location: 'Porto, Portugal',
      price: '€500,000',
      beds: '1 to 2 Beds from'
    }
  },
  {
    id: 3,
    position: { lat: 37.0179, lng: -7.9307 },
    info: {
      image: '/images/homepage/dreamhomecontact.png',
      title: 'New Development Faro',
      location: 'Faro, Portugal',
      price: '€450,000',
      beds: '2 to 4 Beds from'
    }
  }
];

const CustomMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAz8XY-mr9AEXYq-HoUjLa4q1odrW2Qshw"
  });

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState(center);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach(location => bounds.extend(location.position));
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // const handleMarkerClick = (location) => {
  //   setSelectedMarker(location);
  //   setMapCenter(location.position);
  // };

  const handleMarkerClick = (location) => {
    setSelectedMarker(location);
    map.panTo(location.position); // Smoothly pan to the selected marker
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const getAdjustedPosition = (position) => {
    const offset = 0.5; // Adjust this value to move the InfoWindow higher or lower
    return {
      lat: position.lat + offset,
      lng: position.lng
    };
  };

  return isLoaded ? (
    <div className='h-[95vh] w-full sticky top-5'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false
        }}
      >
        {locations.map(location => {
          const customIcon = {
            url: 'https://res.cloudinary.com/do3bw9naj/image/upload/fl_preserve_transparency/v1719647164/mapmarker.jpg?_s=public-apps',
            scaledSize: new window.google.maps.Size(40, 50),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(21, 50)
          };

          return (
            <Marker
              key={location.id}
              position={location.position}
              onClick={() => handleMarkerClick(location)}
              icon={customIcon}
            />
          );
        })}

        {selectedMarker && (
          <InfoWindow
            // position={selectedMarker.position}
            position={getAdjustedPosition(selectedMarker.position)}
            onCloseClick={handleInfoWindowClose}
          >
            <div className='w-52 sm:w-64'>
              <div className='relative h-44 bg-cover' style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)", backgroundRepeat: "no-repeat" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>

                <div className='absolute top-3 right-3 py-1 px-1.5 sm:p-2 cursor-pointer rounded-md border-2 border-black bg-bggray opacity-80 text-black' 
                onClick={handleInfoWindowClose}>
                  <FontAwesomeIcon icon={faXmark} className='text-base sm:text-lg' />
                </div>

                <div className="absolute bottom-0 text-white p-3">
                  <h2 className='text-base sm:text-lg font-bold my-2 '>{selectedMarker.info.title}</h2>
                  <div className='flex items-center gap-2 font-medium text-[12px] sm:text-[13px] '>
                    <span>
                      <img src="/images/icons/locationmarkerwhite.svg" alt="location" className='h-4' />
                    </span>
                    <span>
                      {selectedMarker.info.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className='bg-primarycolor text-white flex items-center gap-3 justify-end py-3 px-3'>
                <div className=''>
                  <p className='text-sm sm:text-base text-right'>{selectedMarker.info.beds}</p>
                  <p className='text-base sm:text-lg font-bold  text-right' style={{ letterSpacing: '2px' }}>{selectedMarker.info.price}</p>
                </div>
                <div className=''>
                  <span className='p-1.5 pt-2 sm:p-2.5 sm:pt-3 bg-bggray font-semibold text-black border-2 border-black opacity-80 rounded-md'>
                    <FontAwesomeIcon icon={faChevronRight} className='text-sm sm:text-base' />
                  </span>
                </div>
              </div>
            </div>

          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : <></>;
}

export default React.memo(CustomMap);
