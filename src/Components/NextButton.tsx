import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

type Props={
    to:string,
    label?:string
}

export default function NextButton({to,label}:Props):JSX.Element{
    const navigate=useNavigate();

    return(
        <>
        <button 
        onClick={()=>navigate(to)}
        className="
            mt-10
            px-6 py-3
            text-lg
            border border-white
            transition-all duration-300
          hover:bg-white hover:text-black
            hover:scale-105
            active:scale-95
        
        
        "
        >
            {label||"Next->"}
        </button>
        </>
    )

}