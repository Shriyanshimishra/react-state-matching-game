import React from 'react'
import {useEffect, useRef, useState} from 'React'

const useHover = () => {
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    const leave = () => setHovered(false)
    const enter = () => setHovered(true)


    useEffect(() => {
        const refCopy = ref 
        refCopy.current.addEventListener('mouseenter', enter)
        refCopy.current.addEventListener('mouseleave', leave)
        return () => {
            refCopy.current.removeEventListener('mouseenter', enter)
            refCopy.current.removeEventListener('mouseleave', leave)
        }
       
    })
    return [ref, hovered]

}

export default useHover