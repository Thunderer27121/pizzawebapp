import { useNavigate } from "react-router-dom";

const categories = [
  { name: "veg", icon: "🍃", color: "from-green-400 to-lime-500" },
  { name: "nonveg", icon: "🍗", color: "from-red-400 to-pink-500" },
  { name: "spicy", icon: "🌶", color: "from-orange-500 to-red-600" },
  { name: "cheeseburst", icon: "🧀", color: "from-yellow-400 to-amber-500" },
  { name: "family", icon: "👨‍👩‍👧‍👦", color: "from-purple-400 to-indigo-500" },
  { name: "beverages", icon: "🥤", color: "from-cyan-400 to-blue-500" }
];

const MenuPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen  py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-red-600 drop-shadow">
        🍕 Explore Our Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`bg-gradient-to-br ${cat.color} text-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center transform transition hover:scale-105 hover:shadow-teal-50 cursor-pointer`}
          onClick={()=>{
            navigate(`/products/${cat.name}`)
          }}
          >
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h2 className="text-xl font-bold">{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
