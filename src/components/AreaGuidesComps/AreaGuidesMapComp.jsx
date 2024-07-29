import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Polygon } from '@react-google-maps/api';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

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
      image: '/images/pages/homepage/herosection.svg',
      title: 'New Development Lisbon',
      location: 'Estrela, Lisbon',
      price: '€650,000',
      beds: '2 to 3 Beds from'
    },
    polygonCoords: [
      { lat: 38.725, lng: -9.15 },
      { lat: 38.725, lng: -9.13 },
      { lat: 38.71, lng: -9.13 },
      { lat: 38.71, lng: -9.15 }
    ]
  },
  {
    id: 2,
    position: { lat: 41.1579, lng: -8.6291 },
    info: {
      image: '/images/pages/homepage/herosection.svg',
      title: 'New Development Porto',
      location: 'Porto, Portugal',
      price: '€500,000',
      beds: '1 to 2 Beds from'
    },
    polygonCoords: [
      { lat: 41.16, lng: -8.64 },
      { lat: 41.16, lng: -8.62 },
      { lat: 41.15, lng: -8.62 },
      { lat: 41.15, lng: -8.64 }
    ]
  },
  {
    id: 3,
    position: { lat: 37.0179, lng: -7.9307 },
    info: {
      image: '/images/pages/homepage/herosection.svg',
      title: 'New Development Faro',
      location: 'Faro, Portugal',
      price: '€450,000',
      beds: '2 to 4 Beds from'
    },
    polygonCoords: [
      { lat: 37.02, lng: -7.94 },
      { lat: 37.02, lng: -7.92 },
      { lat: 37.01, lng: -7.92 },
      { lat: 37.01, lng: -7.94 }
    ]
  }
];

const AreaGuidesMapComp = ({ customview }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAz8XY-mr9AEXYq-HoUjLa4q1odrW2Qshw"
  });

  const [map, setMap] = useState(null);
  const [highlightedArea, setHighlightedArea] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const clustererRef = useRef(null);

  const onLoad = useCallback((map) => {
    console.log("Map Loaded", map);
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
          zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
        });
      }
    };

    clustererRef.current = new MarkerClusterer({ map, markers: [], renderer });

    map.addListener('click', () => {
      console.log("Map clicked, clearing highlighted area.");
      setHighlightedArea(null);
      setSelectedLocation(null);
    });
  }, []);

  const onUnmount = useCallback((map) => {
    console.log("Map Unmounted", map);
    setMap(null);
  }, []);

  useEffect(() => {
    if (map && clustererRef.current) {
      console.log("Adding markers to clusterer");
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

      clustererRef.current.clearMarkers();
      clustererRef.current.addMarkers(markers);
    }
  }, [map]);

  const handleMarkerClick = (location) => {
    console.log("Marker clicked:", location.info.title);
    map.panTo(location.position);
    map.setZoom(13);

    if (location.polygonCoords) {
      console.log("Setting highlighted area for", location.info.title);
      setHighlightedArea(location.polygonCoords);
    } else {
      setHighlightedArea(null);
    }

    setSelectedLocation(location);
  };

  useEffect(() => {
    if (highlightedArea) {
      console.log("Highlighted area set:", highlightedArea);
    } else {
      console.log("No highlighted area set");
    }
  }, [highlightedArea]);

  return isLoaded ? (
    <div className={`${customview ? 'h-[50vh] xl:h-[100vh] ' : 'h-[100vh]'} w-full relative`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          gestureHandling: 'auto'
        }}
      >
        {highlightedArea && (
          <Polygon
            paths={highlightedArea}
            options={{
              fillColor: "#FF0000",
              fillOpacity: 0.35,
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              clickable: false,
              draggable: false,
              editable: false,
              geodesic: false,
              zIndex: 1
            }}
          />
        )}
      </GoogleMap>
      {selectedLocation && (
        <div className="absolute bottom-24 right-4 bg-white rounded-lg  flex items-start">
          <img src={selectedLocation.info.image} alt={selectedLocation.info.title} className="w-40 h-32 object-cover rounded-tl-lg rounded-bl-lg" />
          <div className="px-6 py-4">
            <h3 className="text-base font-semibold">{selectedLocation.info.title}</h3>
            <p className='text-sm mt-5'>View Area / View Properties</p>
          </div>
        </div>
      )}
    </div>
  ) : <></>;
};

export default React.memo(AreaGuidesMapComp);
