import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
      
     <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm 
bg-gradient-to-br from-black via-slate-900 to-black text-slate-400 pt-10">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

    <div className="sm:col-span-2 lg:col-span-1">
      <a href="">
        <img src={assets.logo} className="brightness-110" />
      </a>

      <p className="text-sm/7 mt-6 text-slate-400">
        Power your creativity with QuickAi.<br/>
        Revolutionize your creative process with our high-end AI tools. From professional writing to image generation, we help you work smarter and faster.
      </p>
    </div>

    <div className="flex flex-col lg:items-center lg:justify-center">
      <div className="flex flex-col text-sm space-y-2.5">
        <h2 className="font-semibold mb-5 text-slate-200">Company</h2>
        <a className="hover:text-white transition" href="#">About us</a>
        <a className="hover:text-white transition" href="#">Careers</a>
        <a className="hover:text-white transition" href="#">Contact us</a>
        <a className="hover:text-white transition" href="#">Privacy policy</a>
      </div>
    </div>

    <div>
      <h2 className="font-semibold text-slate-200 mb-5">
        Subscribe to our QuickAi
      </h2>

      <div className="text-sm space-y-6 max-w-sm text-slate-400">
        <p>Stop wasting hours on manual tasks and start creating in seconds.</p>

        <div className="flex items-center">
          <input
            className="rounded-l-md bg-slate-800 border border-slate-700 outline-none w-full max-w-64 h-11 px-3 text-slate-200 placeholder-slate-500"
            type="email"
            placeholder="Enter your email"
          />
          <button className="bg-linear-to-b from-indigo-600 to-indigo-800 cursor-pointer hover:from-indigo-700 hover:to-indigo-900 transition px-4 h-11 text-white rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>

  </div>

  <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t mt-6 border-slate-700">
    <p className="text-center text-slate-400">
      Copyright 2025 © <a className="hover:text-white" href="">QuickAi</a> All Right Reserved.
    </p>
    <div className="flex items-center gap-4 text-slate-400">
      <a className="hover:text-white" href="/">Privacy Policy</a>
      <a className="hover:text-white" href="/">Terms of Service</a>
      <a className="hover:text-white" href="/">Cookie Policy</a>
    </div>
  </div>

</footer>
         
  )
}

export default Footer