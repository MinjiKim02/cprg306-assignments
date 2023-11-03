import React from 'react';
import ItemList from './item-list'; 

export default function Page() {
  return (
    <main>
      <h2 className="text-3xl font-bold m-6 text-black">Shopping List</h2>
      <ItemList />
    </main>
  );
}


