import React, { useEffect, useState } from 'react';
import main from "../Api/Gita"
import Navbar from './Navbar';

import { ActiveProvider, useActive } from "../Context/active.jsx"
import Card from './Card.jsx';
import { useParams } from 'react-router-dom';
const VersesPage = () => {
    const [value, setvalue] = useState([]);
    const { chapter, id } = useParams()
    console.log(id)
    useEffect(() => {
        main(`chapters/${chapter}/verses/${id}`)
            .then(response => {
                setvalue(response);
                console.log(response)
            })
        console.log(value)
    }, [chapter,id]);
    const sendContent = value?.translations;
    console.log(value.translations)
    return (


        <div className='bg-black w-full h-screen'>
            <Navbar />
            <div className='flex'>
                <div className='text-white p-5'>
                    <h1 className='text-[30px] font-bold font-oswald underline'>
                        {value?.slug}
                    </h1>
                    <div>
                        <div className={`p-3 bg-white text-black mt-3 rounded-xl w-full m-4`}>
                            <h4 className="text-2xl text-center font-main font-bold">
                                {value?.text}
                            </h4>
                            <div className="m-2 h-auto">
                                <h1 className='text-center text-[31px]'>Translation</h1>
                                <ul className='list-decimal px-9 rounded-3xl py-3 text-[20px] bg-[#5f9ea0]'>
                                    {
                                       value?.translations &&(value.translations).map((item,index)=>{
                                            return(
                                                index<=4 &&(

                                                    <li>{item.description}</li>
                                                )
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="m-2 font-bold font-main">

                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </div>

    )
}
export default VersesPage