import React from 'react';
import './Wheresection.css';

const Wheresection = () => {
  return (
    <div className="Where-section">
      <h1 className="Where-title">Find your Big!</h1>
      <div className="Map-container">
        <img
          src={`https://www.mapquestapi.com/staticmap/v5/map?key=TTjlcNyhRNfFfco2YKK8WlYVBjApKjtM&center=Lisbon,Portugal&size=800,400&type=map&zoom=13`}
          alt="Map"
          height={693}
          width={1515}
        />
      </div>
    </div>
  );
};

export default Wheresection;
