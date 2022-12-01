import e from 'express';
import React, { useState } from 'react';

const BioMenu = ({ bio }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bio-item">
      <div className="bio-title" onClick={() => setIsActive(!isActive)}>
        <span className="white-text">{bio.year}: </span>
        <span className="gray-text" data-tip="title"> {bio.title} </span>
        <div>{bio.title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{bio.description}</div>}
    </div>
  );
};

export default BioMenu;
