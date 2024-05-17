import React from 'react';

const FancyTable = ({ n }) => {
  const listItems = Array.from({ length: n }, (_, index) => index + 1);

  return (
    <ul>
      {listItems.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default FancyTable;