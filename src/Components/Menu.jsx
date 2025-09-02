import React from 'react'
import Pizza from '../assets/pizza.png'
import Grilled from '../assets/grilled.png'
import Salad from '../assets/salad.png'
import Biryani from '../assets/biryani.jpeg'
import Bread from '../assets/bread.jpeg'
import Cake from '../assets/cake.jpeg'
import Chocolate from '../assets/chocolate.jpeg'
import Fries from '../assets/Fries.jpg'
import Dhosa from '../assets/Masala-Dosa.jpg'
const Menu = () => {
  return (
    <>
      <div className='bg-[#fdf6e3]'>
        <div >
          <div className='text-center p-5 '>
            <h1 className='text-3xl md:text-5xl font-bold '>Our Menu</h1>
            <p className='mt-5 text-lg'>Explore our selection of delicious and frshly prepared dishes.</p>
            <h1 className='mt-10 text-3xl md:text-5xl font-bold'>Featured Dishes</h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 justify-items-center'>
            <div className='w-64'>
              <img src={Pizza} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
              <h2 className='text-lg'>Margherita Pizza</h2>

              <p className='text-lg'>$15</p>
            </div>
            <div className='w-64'>
              <img src={Grilled} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
              <h2 className='text-lg'>Grilled Salmon</h2>

              <p className='text-lg'>$18</p>
            </div>
            <div className='w-64'>
              <img src={Salad} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
              <h2 className='text-lg'>Caesar Salad</h2>
              <p className='text-lg'>$12</p>
            </div>
            <div className='w-64'>
              <img src={Biryani} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
              <h2 className='text-lg'>Biryani</h2>
              <p className='text-lg'>$20</p>
            </div>
            <div className='w-64'>
              <img src={Bread} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
              <h2 className='text-lg'>Bread</h2>
              <p className='text-lg'>$15</p>
            </div>
            <div className='w-64'>
              <img src={Cake} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
              <h2 className='text-lg'>Cake</h2>
              <p className='text-lg'>$10</p>
            </div>
            <div className='w-64'>
              <img src={Chocolate} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
              <h2 className='text-lg'>Chocolate Cup</h2>
              <p className='text-lg'>$9</p>
            </div>
            <div className='w-64'>
              <img src={Fries} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
              <h2 className='text-lg'>Franch Fries</h2>
              <p className='text-lg'>$10</p>
            </div>
            <div className='w-64'>
              <img src={Dhosa} alt="" className='w-64 h-64 rounded md-:w-[400px] md:h-[250px]' />
              <h2 className='text-lg'>Masala Dosa</h2>
              <p className='text-lg'>$15</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu