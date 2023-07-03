import React from "react";

export const Input = ({
    className,
    type,
    id,
    name,
    value,
    onChange
})=>{
    return(
        <input
        type={type}

        className={className} 
        onChange={onChange} 
        />
    )
}