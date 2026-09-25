import React from "react";
export default function Button(
    {children,onClick,variant = 'primary'}
){
    const className = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';

    return(
        <button className ={'btn ${className}'} onClick={onClick}>

        </button>
    );
}