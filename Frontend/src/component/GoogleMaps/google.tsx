import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <iframe
        title="Google Maps"
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=PLACE_NAME`}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
