import { Eraser } from 'lucide-react';
import React, { useState } from 'react'

const RemoveBackground = () => {
      
    const [input , setInput] = useState('')
          
    const onSubmitHandler = async(e)=>{
      e.preventDefault();
    }

  return (

   <div className='w-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
       
     {/* left col  */}
       
       <form onSubmit={onSubmitHandler} className='w-full max-w-lg border border-gray-300 p-4 rounded-lg bg-gray-100'>
          <div className='flex items-center gap-3'>
            <Eraser className='w-6 text-[#FF4938]'/>
            <h1 className='text-xl font-semibold'>Background Removal</h1>
          </div>
          <p className='mt-6 text-sm font-medium'>Upload image</p>
          <input onChange={(e)=>setInput(e.target.files[0])} type='file'accept='image/*' className='border border-gray-400 p-2 mt-3 outline-none w-full text-sm rounded-lg' required />

          <p className='text-xs mt-1'>Supports JPG, PNG, and other image formats</p>
          <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:scale-95'>
            <Eraser className='w-5' />
            Remove background
          </button>

       </form>

     {/* right col  */}

     <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 '>

      <div className='flex items-center gap-3'>
        <Eraser className='w-5 h-5 text-[#dd6133]' />
        <h1 className='text-xl font-semibold '> Processed Image</h1>
      </div>

       <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
             <Eraser className='w-9 h-9' />
             <p>Upload an image and click "Remove Background" to get started</p>
          </div>
       </div> 

     </div>
    
    </div>
  )
}

export default RemoveBackground