import React from 'react'
import Random from './component/Random'
import Tag from './component/Tag'
const App = () => {
  return (

  
           <div className='w-full h-screen flex flex-col background items-center
           overflow-hidden'>

<h1 className='text-3xl  bg-white w-11/12 py-2 px-4 rounded-xl mt-[40px] text-center text-black 
'>Random gif</h1>
 <div className='flex flex-col w-full gap-10 justify-center items-center mt-[25px]'>
 <Random/>
 <Tag/>
 </div>

</div>
  
  
  )
}

export default App