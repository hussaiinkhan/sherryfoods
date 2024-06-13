import React from 'react'

const Hero = () => {
  return (
    <div className='w-full mx-auto px-6 sm:px-20 h-screen top-[90px] flex flex-col justify-center bg-gray-900 text-white'>
        <div className='grid sm:grid-cols-2'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='font-bold text-3xl sm:text-5xl text-white'>Delicious & Affordable </h1>
                <h1 className='font-bold text-2xl sm:text-5xl text-gray-900 bg-slate-500 px-16 py-1 rounded-sm my-3'>Meals near You</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <button className='font-bold m-4 bg-slate-600 p-4 rounded-md text-gray-900'>Order Now</button>
            </div>
            <div>
                <img className='w-full max-h-[500px] object-cover rounded-3xl' src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="food" />
            </div>
        </div>
    </div>
  )
}

export default Hero