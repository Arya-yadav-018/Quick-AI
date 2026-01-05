import { Scissors } from 'lucide-react'
import React, { useState } from 'react'

const RemoveObject = () => {

     const [input , setInput] = useState('')
     const[object , setObject] = useState('')
             
       const onSubmitHandler = async(e)=>{
         e.preventDefault();
       }

  return (


    <div className='w-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
       
     {/* left col  */}
       
       <form onSubmit={onSubmitHandler} className='w-full max-w-lg border border-gray-300 p-4 rounded-lg bg-gray-100'>
          <div className='flex items-center gap-3'>
            <Scissors className='w-6 text-[#4A7AFF]'/>
            <h1 className='text-xl font-semibold'>Object Removal</h1>
          </div>
          <p className='mt-6 text-sm font-medium'>Upload image</p>
          <input onChange={(e)=>setInput(e.target.files[0])} type='file'accept='image/*' className='border border-gray-400 p-2 mt-3 outline-none w-full text-sm rounded-lg' required />

          <p className='mt-6 text-sm font-medium'>Describe object name to remove</p>

          <textarea onChange={(e)=>setObject(e.target.value)} value={object} rows={4} className='border border-gray-400 p-2 mt-3 outline-none w-full text-sm rounded-lg' placeholder='e.g., watch or spoon , only single object name' required />

          <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#786bf6] to-[#38cdff] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:scale-95'>
            <Scissors className='w-5' />
            Remove object
          </button>

       </form>

     {/* right col  */}

     <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 '>

      <div className='flex items-center gap-3'>
        <Scissors className='w-5 h-5 text-[#4A7AFF]' />
        <h1 className='text-xl font-semibold '> Processed Image</h1>
      </div>

       <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
             <Scissors className='w-9 h-9' />
             <p>Upload an image and click "Remove Object" to get started</p>
          </div>
       </div> 

     </div>
    
    </div>


  )
}

export default RemoveObject