import React from 'react'
 import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

const navigate = useNavigate()

  return (
   <div
  className="relative min-h-screen w-full px-4 sm:px-20 xl:px-32 flex flex-col justify-center text-gray-100 bg-cover bg-center"
  style={{ backgroundImage: `url(${assets.saas2})` }}
>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>

  {/* Content */}
  <div className="relative z-10">

    <div className='text-center mb-6'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>
        Create Amazing content <br/>
        <span className='text-white'>with AI Tools</span>
      </h1>

      <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-400'>
        Transform your content creation with our suite of premium AI tools. Write articles, generate images, and echance your workflow.
      </p>
    </div>

    <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
      <button onClick={()=> navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>
        Start creating now
      </button>
      <button className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>
        Watch demo
      </button>
    </div>

  </div>
</div>

  )
}

export default Hero