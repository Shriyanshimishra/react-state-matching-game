import React from 'react'
import {useEffect, useRef, useState} from 'React'

function useHover() {
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    
    useEffect(() => {
        const refCopy = ref 
        refCopy.current.addEventListener('mouseenter', ())
    })
    return (
        [ref, hovered]
    )

}

export default hooks