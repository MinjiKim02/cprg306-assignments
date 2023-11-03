"use client";

import { useState } from "react";
import NewItem from './new-item'; 
import ItemList from './item-list';
import itemsData from './item.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h2 className="text-3xl font-bold text-black">Shopping List</h2>
      <div className="mt-4">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="mt-4">
        <ItemList items={items} />
      </div>
    </main>
  );
}
