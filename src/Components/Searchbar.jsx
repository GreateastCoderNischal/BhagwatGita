import { useState } from "react";
import { Search } from "@mui/icons-material";
import {useNavigate} from "react-router-dom"
export default function Searchbar() {
    const [chapter, setChapter] = useState('')
    const [verses, setVerses] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        if (chapter > 18 || verses <= 0) {
            alert("Incorrect form");
        }
        else{
            Navigate(`/gita/verse/${chapter}/${verses}`)
        }
    }
    const Navigate=useNavigate()
    return (
        <form onSubmit={handleSubmit} className="flex items center gap-3">
            <div className="flex items-center gap-3">

                <label className=" text-[20px] text-black font-bold font-Mukta">
                    Chapter
                </label>

                <input type="number" className="rounded-lg p-1 outline-none border-none" inputMode="numeric" placeholder="Enter the chapter"
                    value={chapter}
                    onChange={(event) => setChapter(event.target.value)}
                />
            </div>
            <div className="flex items-center gap-3">

                <label className=" text-[20px] text-black font-bold font-Mukta">
                    Verses
                </label>

                <input type="number" className="rounded-lg p-1 outline-none border-none"
                    value={verses}
                    onChange={(event) => setVerses(event.target.value)}
                    inputMode="numeric" placeholder="Enter the verses" />
            </div>
            <button>

            <Search sx={{
                background: 'yellow',
                height: '29px',
                width: '40px',
                borderRadius:'10px'
            }} />
            </button>
        </form>
    )
}