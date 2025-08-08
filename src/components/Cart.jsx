import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, decreaseQuantity, addToCart } from "./store/cartslice";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <div className="max-w-4xl mx-auto p-6 flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 flex-col flex w-1/2 ml-55 ">Your cart is empty
                    <button className="border-amber-50 outline-2 rounded-xl p-2 mt-10" onClick={() => { navigate(-1) }}>GO BACK</button>
                    <img src="https://www.pngplay.com/wp-content/uploads/7/Cart-Transparent-PNG.png" alt="" className='rounded-2xl mt-12 hover:bg-white transition' />
                </p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center bg-white shadow-lg rounded-2xl p-4 hover:scale-[1.01] transition-all"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-cover rounded-xl mr-4 border"
                            />

                            <div className="flex-1 text-black">
                                <h3 className="text-xl  font-semibold">{item.name}</h3>
                                <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                                <p className="font-medium mt-1 text-red-600">
                                    Total: ₹{item.price * item.quantity}
                                </p>

                                <div className="flex items-center mt-2 gap-2">
                                    <button
                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                        className="w-8 h-8 text-xl bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        −
                                    </button>
                                    <span className="px-2 text-lg">{item.quantity}</span>
                                    <button
                                        onClick={() => dispatch(addToCart(item))}
                                        className="w-8 h-8 text-xl bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => dispatch(removeFromCart(item.id))}
                                className="ml-4 text-red-500 hover:text-red-700 text-xl"
                            >
                                ❌
                            </button>
                           
                        </div>
                    ))}
                     <div className='flex items-center justify-evenly '>
                        <button
                                onClick={() => dispatch(clearCart())}
                                className="px-6 py-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
                            >
                                🗑️ Clear Cart
                            </button>
                    <button className="border-amber-50 outline-2 rounded-xl p-2" onClick={() => { navigate(-1) }}>GO BACK</button>
                     </div>

                </div>
            )}
        </div>
    );
};

export default Cart;
