import React from 'react';

const TextComponent = ({ text, color }) => {
  const style = {
    color: color || 'black' // Domyślnie czarny kolor tekstu
  };

  return <p style={style}>{text}</p>;
};

export default TextComponent;