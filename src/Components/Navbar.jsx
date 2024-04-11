import React from 'react';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="h-[63px] px-4 bg-violet-400 flex justify-between items-center">
            <div className="text-[30px] font-bold font-main">
                <Link to="/gita">

                Bhagwat Gita
                </Link>
            </div>
            <Searchbar/>
        </div>
    )
}
export default Navbar