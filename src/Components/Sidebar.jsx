import { useState } from "react"


const chapters = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18];

export default function Sidebar({ active, setActive }) {

    return (
        <div className="w-[25vw] bg-[#121212] text-white font-Mukta p-3 h-full">
            <h1 className="text-3xl flex gap-1 mb-1">
                <img src="https://th.bing.com/th/id/OIP.E2ndrBfA7QOmFJQOdzst8wHaNI?rs=1&pid=ImgDetMain" 
                className="h-[85px] w-[45px] rounded-lg" />
                18 Chapters of Bhagwat Gita</h1>
            <ul className="sidebar-ul">
                {chapters.map((items, index) => (

                    <li key={index}
                        style={{
                            opacity: active == items && 1,
                        }}
                        onClick={() => setActive(items)}
                    >Chapter {items}</li>
                ))}
            </ul>
        </div>
    )
}