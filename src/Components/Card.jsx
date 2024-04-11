import { useNavigate } from "react-router-dom";
export default function Card({ title, content, learnmore, Explanation, chapter, verses }) {
    const Navigate = useNavigate();

    return (
        <div className={`p-3 ${learnmore ? 'bg-yellow-700' : 'bg-white'} text-black mt-3 rounded-xl w-[70vw]`}>
            <h4 className="text-xl">
                {title}
            </h4>
            <div className="m-2">
                {content}
            </div>
            <div className="m-2 font-bold font-main">
                {Explanation}
            </div>

            {learnmore && (

                <div className="px-5">
                    <span>......</span>
                    <button className="p-4 rounded-xl font-bold font-oswald " onClick={() => {
                        Navigate(`/gita/verse/${chapter}/${verses}`)
                    }}>
                        Learn More
                    </button>
                </div>
            )
            }
        </div >
    )
}