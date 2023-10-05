import React from 'react';

function Map({ map }) {
  return (
    <div className="tour_details_boxed">
      <h3 className="heading_theme">Tours location</h3>
      <div className="map_area"  dangerouslySetInnerHTML={{ __html:map }} />
      
    </div>
  );
}

export default Map;
