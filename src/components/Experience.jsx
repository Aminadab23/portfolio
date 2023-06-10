import React from 'react'

import django from '../assets/django.png'
import drf from '../assets/drf.png'
import flutter from '../assets/flutter.png'
import reactlogo from '../assets/reactlogo.png'
import php from '../assets/php.jpeg'
import java from '../assets/java.png'
const Experience = () => {
   const portfolios=[
    {
        id: 1,
        src: django,style:"shadow-sky-400"
    },
    {
        id:2,
        src: drf
    },
    {
        id:3,
        src: flutter
    },
    {
        id:4,
        src: reactlogo
    }, {
        id:5,
        src: java
    }, {
        id:6,
        src: php
    },
  
   ]
  return (
    <div  className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className="pb-8">
                <p className='mt-3 text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className="py-6 ">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        
        {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                className="w-60 ml-10 rounded-md duriation-200 hover:scale-105"
                alt={id}
              />
              <div className="flex item-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>

            </div>
        

   
  );
}

export default Experience