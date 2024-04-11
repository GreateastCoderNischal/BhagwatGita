import React, { useEffect, useState } from 'react';
import main from "../Api/Gita"
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { ActiveProvider, useActive } from "../Context/active.jsx"
import Card from './Card.jsx';
const Page = () => {
    const [value, setvalue] = useState([]);
    const [active, setActive] = useState(1)
    const [verses, setVerses] = useState([])
    useEffect(() => {
        main('chapters/'+active)
.then(response=>setvalue(response))

        main(`chapters/${active}/verses`)
            .then(result => {
                setVerses(result);               
            })
    }, [active]);
    return (
        <ActiveProvider>

            <div className='bg-black w-full h-auto'>
                <Navbar />
                <div className='flex'>
                    <Sidebar active={active} setActive={setActive} />
                    <div className='text-white p-5'>

                        <h1 className='text-3xl font-bold font-oswald'>
                            {value && value.slug ? value.slug[0].toUpperCase() + value.slug.slice(1) : ''}
                        </h1>
                        <div>

                            <Card title={value?.name_translated} content={value?.chapter_summary} />
                            {verses.map((item, index) => {
                               
                                const { translations } = item;
                               
                                const {description}=translations[4]
                                console.log(description)
                                return (<Card key={index} title={item?.slug} 
                                    chapter={active}
                                    verses={index+1}
                                    content={`${item?.text}`}
                                Explanation={description}
                                
                              learnmore={true} />)
                            })}
                        </div>
                        <hr />

                    </div>
                </div>
            </div>
        </ActiveProvider>
    )
}
export default Page