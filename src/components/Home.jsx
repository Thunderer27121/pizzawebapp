import image from "../images/pizza.png"
import mar from "../images/margretta.png"
import veg from "../images/veggie.png"
import pep from "../images/pepproni.png"
import bbq from "../images/bbq.png"

import { motion } from "motion/react";
import { useState } from "react";
const pizzas = [
  { id: 1, name: "Margherita", img: mar },
  { id: 2, name: "Pepperoni", img: pep },
  { id: 3, name: "Veggie", img: veg },
  { id: 4, name: "BBQ Chicken", img: bbq },
];
const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pizzas.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pizzas.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="h-[90vh] w-full flex items-center justify-center">
      <div className='h-[100%] w-[50%]'>
        <motion.img src={image} alt="pizza" className="h-full w-full"
          initial={{ x: -600, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 1.5, delay: 0.5, type: "spring", bounceStiffness: 1, stiffness: 100 }} 
           viewport={{once :"true"}}
           />
      </div>
      <div className='h-[100%] w-[50%] py-10'>
          <motion.div  initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}> 
            <div className="text-4xl text-red-500 inline" >Welcome </div>
          <span className="text-3xl text-red-500">to</span>
          <div className="text-5xl text-yellow-500 inline"> Hot 'N' Slice</div>
          <hr className="mb-15"/>
          </motion.div>
        <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:1, delay:1}}>
          <p align="center" className="py-3 font-sans text-3xl px-8">
            "Freshly baked perfection, straight from our oven to your plate.
Hot 'N' Slice – where every bite is a slice of heaven." </p>
         <div className="relative w-[40%] h-[35%] max-w-xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={pizzas[currentIndex].img}
          alt={pizzas[currentIndex].name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-2 text-center text-lg font-bold">
          {pizzas[currentIndex].name}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        ▶
      </button>
    </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home