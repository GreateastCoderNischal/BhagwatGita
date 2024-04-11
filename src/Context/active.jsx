import React, { createContext, useContext } from 'react';

const Active=createContext();
const ActiveProvider=(props)=>{
    const [active,setActive]=React.useState(1);
    return(
        <Active.Provider value={{active,setActive}}>
            {props.children}
        </Active.Provider>
    )
}

const useActive=()=>useContext(Active);
export {ActiveProvider,useActive}