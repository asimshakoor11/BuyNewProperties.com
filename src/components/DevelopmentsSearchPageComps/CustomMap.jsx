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

const CustomMap = ({ locations = [], customview }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAz8XY-mr9AEXYq-HoUjLa4q1odrW2Qshw"
  });

  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState(center);
  const clustererRef = useRef(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach(location => bounds.extend(location.position));
    map.fitBounds(bounds);
    setMap(map);


    const icon = {
      url: 'https://res.cloudinary.com/do3bw9naj/image/upload/v1720865615/Untitled_design__1_-removebg-preview_jo8kpa.png',
      scaledSize: new window.google.maps.Size(50, 50),
    };


    const renderer = {
      render({ count, position }) {
        return new google.maps.Marker({
          label: { text: String(count), color: "white", fontSize: "12px", fontWeight: 'semibold' },
          position,
          icon,
          // adjust zIndex to be above other markers
          zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
        });
      }
    }


    // Initialize the MarkerClusterer
    clustererRef.current = new MarkerClusterer({ map, markers: [], renderer });

    map.addListener('click', () => {
      setSelectedMarker(null);
    });
  }, []);

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
  }, [map]);


  const handleMarkerClick = (location) => {
    setSelectedMarker(location);
    const adjustedPosition = getAdjustedPosition(location.position);
    map.panTo(adjustedPosition); // Smoothly pan to the selected marker
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

   const getAdjustedPosition = (position) => {
    if (!map) return position;

    const bounds = map.getBounds();
    if (!bounds) return position;

    const span = bounds.toSpan();
    const latOffset = span.lat() * 0.25; // Adjust this value to move the InfoWindow higher or lower
    return {
      lat: position.lat + latOffset,
      lng: position.lng
    };
  };

  return isLoaded ? (
    <div className={`${customview ? 'h-[50vh] xl:h-[100vh] ' : 'h-[100vh]'} w-full sticky top-0`}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          gestureHandling: 'auto'
        }}
      >

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={handleInfoWindowClose}
          >
            <div className='max-w-72 lg:min-w-72 bg-container ' >
              <div className='relative ' >
                <div className='relative overflow-hidden h-48'>
                  <img src="/images/pages/homepage/herosection.svg" alt="" className='h-full w-full object-cover bg-zoom' />
                </div>
                <div className='absolute -bottom-2 z-10 h-[45%] w-full' style={{ background: 'linear-gradient(to bottom, transparent, #000000 50%)' }}></div>

                <div className='absolute top-3 right-3 p-2.5 rounded-md  hover:border-primarycolor bg-bggray hover:bg-primarycolor hover:opacity-100 opacity-80 text-black hover:text-white cursor-pointer transition-colors duration-300 ease-in-out'
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
                    <span className='p-2.5 pt-3 font-semibold bg-bggray hover:bg-primarycolor hover:opacity-100 opacity-80 text-black hover:text-white rounded-md cursor-pointer transition-colors duration-300 ease-in-out'>
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

export default React.memo(CustomMap);
