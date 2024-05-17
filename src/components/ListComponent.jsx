import React from 'react';

const ListComponent = ({ elements }) => (
  <ul>
    {elements.map((element, index) => (
      <li key={index}>{element}</li>
    ))}
  </ul>
);

export default ListComponent;