"use client";

import { useState } from "react";

export default function Item() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert(`Added item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        const item = {
          name,
          quantity,
          category,
        };
        console.log(item);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
        
            <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">

                <form onSubmit={handleSubmit} className="bg-blue-100 p-4 space-y-4 rounded-lg">
                    <label className="block mb-4">
                        <span className="text-gray-800">Event Name:</span>
                        <input
                            required
                            onChange={handleNameChange}
                            value={name}
                            className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                        />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-800">Quantity:</span>
                        <input
                            type="number"
                            required
                            min="1"
                            max="99"
                            onChange={handleQuantityChange}
                            value={quantity}
                            className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                        />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-800">Category:</span>
                        <select
                            required
                            onChange={handleCategoryChange}
                            value={category}
                            className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen-foods">Frozen Foods</option>
                            <option value="canned-goods">Canned Goods</option>
                            <option value="dry-goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <br/>
                    <div className="flex justify-center">
                    <button type="submit" className="py-2 px-20 text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-lg">  +  </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
