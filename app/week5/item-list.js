"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from './item.json'; 


export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...itemsData].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return (
        <div>
          <div>
            <button
              onClick={() => setSortBy("name")}
              style={{ backgroundColor: sortBy === "name" ? "lightblue" : "white",
              fontSize: "18px",
              fontWeight: "normal", 
              marginLeft: "16px",
              marginRight: "10px",
              padding: "5px",
              borderRadius: "5px" }}
            >
              Sort by Name
            </button>
            <button
              onClick={() => setSortBy("category")}
              style={{ backgroundColor: sortBy === "category" ? "lightblue" : "white",
              fontSize: "18px",
              fontWeight: "normal", 
              marginLeft: "10px",
              marginRight: "10px",
              padding: "5px",
              borderRadius: "5px" }}
            >
              Sort by Category
            </button>
          </div>
          <ul>
            {sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </ul>
        </div>
      );
}

