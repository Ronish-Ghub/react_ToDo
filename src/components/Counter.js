import React, { useState } from 'react'

export const Counter = () => {
        const[count,setcount]=useState(0)
    return (
        <div>
            <p>button clicked {count} time</p>
            <button onClick={()=>{setcount(count+1)}}>+</button>
        </div>
    )
}

