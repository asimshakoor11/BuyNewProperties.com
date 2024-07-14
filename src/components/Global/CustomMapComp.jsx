import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 39.3999,
  lng: -8.2245
};


const CustomMapComp = ({ locations = [], customview }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAz8XY-mr9AEXYq-HoUjLa4q1odrW2Qshw"
  });

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const clustererRef = useRef(null);

  const onLoad = useCallback((map) => {
    setMap(map);

    // Initialize the MarkerClusterer
    clustererRef.current = new MarkerClusterer({ map, markers: [] });

    map.addListener('click', () => {
      setSelectedMarker(null);
    });

    // Calculate and set the center of the map based on the locations
    if (locations.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      locations.forEach(location => bounds.extend(location.position));
      const center = bounds.getCenter();
      map.setCenter(center);
    }
  }, [locations]);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map && clustererRef.current) {
      const markers = locations.map(location => {
        const customIcon = {
          url: 'https://res.cloudinary.com/do3bw9naj/image/upload/fl_preserve_transparency/v1719985427/location_kchcan.jpg?_s=public-apps',
          scaledSize: new window.google.maps.Size(50, 50),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(25, 50)
        };

        const marker = new window.google.maps.Marker({
          position: location.position,
          icon: customIcon,
          title: location.info.title
        });

        marker.addListener('click', () => {
          handleMarkerClick(location);
        });

        return marker;
      });

      // Clear the previous markers if any
      clustererRef.current.clearMarkers();

      // Add the new markers to the clusterer
      clustererRef.current.addMarkers(markers);
    }
  }, [map, locations]);

  const handleMarkerClick = (location) => {
    const adjustedPosition = getAdjustedPosition(location.position);
    map.panTo(adjustedPosition); // Smoothly pan to the selected marker
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  const getAdjustedPosition = (position) => {
    return {
      lat: position.lat,
      lng: position.lng
    };
  };

  return isLoaded ? (
    <div className={`${customview ? 'h-[70vh]' : 'h-[100vh]'} w-full sticky top-0`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          gestureHandling: 'auto',
          zoom: 12 // Set the initial zoom level here
        }}
      >
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={handleInfoWindowClose}
          >
            <div className='max-w-72 lg:min-w-72 bg-container'>
              <div className='relative'>
                <div className='relative overflow-hidden h-48'>
                  <img src="/images/pages/homepage/herosection.svg" alt="" className='h-full w-full object-cover bg-zoom' />
                </div>
                <div className='absolute -bottom-2 z-10 h-[45%] w-full' style={{ background: 'linear-gradient(to bottom, transparent, #000000 50%)' }}></div>

                <div className='absolute top-3 right-3 p-2.5 md:p-2 rounded-md hover:border-primarycolor bg-bggray hover:bg-primarycolor hover:opacity-100 opacity-80 text-black hover:text-white cursor-pointer transition-colors duration-300 ease-in-out'
                  onClick={handleInfoWindowClose}>
                  <FontAwesomeIcon icon={faXmark} className='text-lg' />
                </div>

                <Link to={'/singledevelopmenpage'}>
                  <div className="absolute z-20 w-full bottom-0 text-white p-3">
                    <h2 className='text-base sm:text-lg font-medium my-2 '>{selectedMarker.info.title}</h2>
                    <div className='flex items-center gap-2 font-medium text-[12px] sm:text-[13px] '>
                      <span>
                        <img src="/images/icons/locationmarkerwhite.svg" alt="location" className='h-4' />
                      </span>
                      <span className='font-medium'>
                        {selectedMarker.info.location}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              <Link to={'/singledevelopmenpage'}>
                <div className='bg-primarycolor text-white flex items-center gap-3 justify-end py-3 px-3 pt-5'>
                  <div className=''>
                    <p className='text-sm sm:text-base text-right'>{selectedMarker.info.beds}</p>
                    <p className='text-base sm:text-lg font-medium text-right'>{selectedMarker.info.price}</p>
                  </div>
                  <div className=''>
                    <span className='p-1.5 pt-2 sm:p-2.5 sm:pt-3 font-semibold bg-bggray hover:bg-primarycolor hover:opacity-100 opacity-80 text-black hover:text-white rounded-md cursor-pointer transition-colors duration-300 ease-in-out'>
                      <FontAwesomeIcon icon={faChevronRight} className='text-sm sm:text-base' />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : <></>;
}

export default React.memo(CustomMapComp);
