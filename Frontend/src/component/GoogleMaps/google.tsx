import React from 'react';
import ReactMapGL from 'react-map-gl';

const MapComponent = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 31.5204,
    longitude:74.3587,
    zoom: 6,
    width: '100%',
    height: '100%'
  });

  return (
    <>
    <div style={{ height: '400px', width: '100%' }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoiamlhLTUiLCJhIjoiY2x3ZjVteGRyMHM5NzJqbzNiamZxbGF4biJ9.THdVwMX0S-DI_QiGxv7Mfw"}
        mapStyle="mapbox://styles/jia-5/clwf9s68k009201qxbny22wwu"
        width="100%"
        height="100%"
        onViewportChange={nextViewport => setViewport(nextViewport)}
        />
    </div>
    </>
  );
};

export default MapComponent;
