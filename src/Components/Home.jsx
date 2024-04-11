import React, { useEffect } from 'react';
import {useNavigate} from "react-router-dom"
const Home=()=>{
   const navigator=useNavigate();
    return(
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='relative rounded-lg p-1 w-[30vw] h-[90vh] flex justify-center'>
                <img
                className='w-full h-full object-cover absolute left-0 top-0 z-[-1]'
                src="https://th.bing.com/th/id/OIP.E2ndrBfA7QOmFJQOdzst8wHaNI?rs=1&pid=ImgDetMain" alt="" />
                <button 
                onClick={()=>navigator("/gita")}
                className=' bg-[#3CEC0C] rounded-3xl p-4 h-[65px] flex items-center
                gap-2 text-white 
                font-bold font-oswald text-[23px]
                mt-2'>
                    <img src="door.svg"
                    className='w-[30px]'
                     height="10"/>
                    <span className='text-red-500'>Open</span>
                    <span>Bhagwat Gita</span>
                </button>
                </div>
        </div>
    )
}
export default Home