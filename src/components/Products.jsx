// ProductsPage.jsx
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "./api/full_pizza_menu.json";
const Products = () => {
    const navigate = useNavigate();
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!category) return;
    const filtered = data.filter((pizza) => pizza.category === category);
    setItems(filtered);


  }, [category]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
        <button className="border-amber-50 outline-1 rounded-xl p-2 float-right" onClick={()=>{navigate(-1)}}>GO BACK</button>
          <h1 className="text-3xl font-bold capitalize mb-4">{category} Pizzas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow rounded-xl flex flex-col">
            <img src={item.image} alt={item.name} className="h-48 w-full object-contain rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-red-500 font-bold mt-1">₹{item.price}</p>
            <button className="bg-gray-600 rounded-2xl p-2">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
