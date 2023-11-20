import React from 'react';

export default function Item({item, onSelect}) {
  const handleClick = () => {
    onSelect(item);
  };

    return (
        <div className="cursor-pointer border border-sky-500 bg-green-400 w-96 m-4 p-2" onClick={handleClick}>
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p>Buy {item.quantity} in {item.category}</p>
        </div>
      );
  }