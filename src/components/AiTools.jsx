import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {
     const navigate = useNavigate()
     const {user} = useUser()
  
  return (
    <div className="w-full bg-gradient-to-br from-black via-slate-900 to-black">
    
     <div className="px-4 sm:px-20 xl:px-32 py-24">

  <div className="text-center">
    <h2 className="text-slate-100 text-[42px] font-semibold">
      Powerful AI Tools
    </h2>
    <p className="text-slate-400 max-w-lg mx-auto">
      Everthing you need to create, enhance, and optimize your content with cutting-edge AI technology
    </p>
  </div>

  <div className="flex flex-wrap mt-12 justify-center">

    {AiToolsData.map((tool, index) => (
      <div
        key={index}
        onClick={() => user && navigate(tool.path)}
        className="p-8 m-4 max-w-xs rounded-xl bg-slate-900/80 border border-slate-700
                   backdrop-blur-lg shadow-md hover:shadow-blue-500/10
                   hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      >
        
        <tool.Icon
          className="w-12 h-12 p-2 text-white rounded-xl"
          style={{ background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})` }}
        />

        <h3 className="mt-6 mb-3 text-lg font-semibold text-slate-100">
          {tool.title}
        </h3>

        <p className="text-slate-400 text-sm max-w-[95%]">
          {tool.description}
        </p>

      </div>
    ))}

  </div>

</div>

    </div>

   

  )
}

export default AiTools