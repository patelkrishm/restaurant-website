import React from 'react'
import { Link } from 'react-router-dom'
import Food from '../assets/food.png'
import Pizza from '../assets/pizza.png'
import Grilled from '../assets/grilled.png'
import Salad from '../assets/salad.png'
import { HashLink } from 'react-router-hash-link'
import Contact from './Contact'
import About from './About'
const Home = () => {
  return (
    <>
      <div className='bg-[#F5E0C6] pt-5'>
        <div className='flex justify-between item-center flex-wrap '>
          <h1 className='ml-5 text-xl text-semibold'>Delicious Dninig</h1>
          <ul className='flex flex-wrap justify-around mr-10 gap-10'>
            <li className='hover:text-orange-900'><Link to='/'>Home</Link></li>
            <li className='hover:text-orange-900'><Link to='/menu'>Menu</Link></li>
            <li className='hover:text-orange-900'><HashLink smooth to="#about">About</HashLink></li>
            <li className='hover:text-orange-900'><HashLink smooth to="#contact">Contact</HashLink></li>
          </ul>
        </div>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center mt-10 mr-10 '>
          <div className='ml-10 text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl font-bold'>Enjoy Delicious Food</h1>
            <p className="mt-4 text-lg">Experience the best dining experience with our exquisite dishes.</p>
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"><Link to='/menu'>View Menu</Link></button>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <img src={Food} alt="" className='w-64 h-64 md:w-[400px] md:h-[400px] object-cover rounded-full ' />
          </div>
        </div>
      </div>
      <div className='bg-[#fdf6e3] '>
        <div className='text-center pt-15 '>
          <h1 className='text-3xl md:text-5xl font-bold '>Our Menu</h1>
          <p className='mt-5 text-lg'>Explore our selection of delicious and frshly prepared dishes.</p>
          <h1 className='mt-10 text-3xl md:text-5xl font-bold'>Featured Dishes</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-around items-center mt-10'>
          <div className='w-64'>
            <img src={Pizza} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
            <h2 className='text-lg'>Margherita Pizza</h2>
            <p className='text-lg'>Classic pizza with fresh tomatoes, mozzarella and basil</p>
            <p className='text-lg'>$15</p>
          </div>
          <div className='w-64'>
            <img src={Grilled} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
            <h2 className='text-lg'>Grilled Salmon</h2>
            <p className='text-lg'>Served with a side of fresh vegetables.</p>
            <p className='text-lg'>$18</p>
          </div>
          <div className='w-64'>
            <img src={Salad} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
            <h2 className='text-lg'>Caesar Salad</h2>
            <p className='text-lg'>Crisp romaine luttuc with Caesar dressing.</p>
            <p className='text-lg'>$12</p>
          </div>
        </div>
        <div>
        <section id='about' className='flex justify-center items-center '>
          <About />
        </section>
      </div>
      <div>
        <section id="contact">
          <Contact />
        </section>
      </div>
      </div>
      
      
    </>
  )
}

export default Home