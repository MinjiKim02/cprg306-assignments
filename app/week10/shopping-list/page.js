"use client";

import React, { useState } from 'react';
import NewItem from './new-item'; 
import ItemList from './item-list';
import itemsData from './item.json';
import MealIdeas from './meal-ideas'; 

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Event handler to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Event handler to select an item from the list
  const handleItemSelect = (item) => {
    let itemName;
    let cleanName;

    if (item.name.includes(",")) {
      itemName = item.name.split(",");
      cleanName = itemName[0].trim();
    } else {
      itemName = item.name.split(" ");
      cleanName = itemName[0].trim();
    }
    let withOutEmoji = cleanName.replace(/[\u{1F600}-\u{1F6FF}]/gu, "");
    setSelectedItemName(withOutEmoji);

    // Clean up the item name (remove emojis, sizes, etc.)
    //const cleanedItemName = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    // setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <h2 className="ml-4 text-3xl font-bold text-black">Shopping List</h2>
      <div className="mt-4 ml-4">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <div className="mt-4 flex">
        <div className="w-1/2">
        <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
