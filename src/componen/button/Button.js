import React from "react";

export const Button = ({
    children,
    className
})=>{
    return(
        <button className={className} 
        onClick={onclick} 
        >
        {children}
        </button>
    )
}