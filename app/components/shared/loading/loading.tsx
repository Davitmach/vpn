
'use client';
import './style.scss';
import {  useEffect, useState } from "react"

export const Loading = ()=> {
    const [active,setActive] = useState<boolean>(true);
    useEffect(()=> {
document.body.style.overflow ='hidden'
setTimeout(() => {
    document.body.style.overflow ='auto' 
    setActive(false);
}, 1000);
    },[])
    if(active == true ) {
        return(
            <div className="absolute left-[0] top-[0] w-[100%] h-[100vh] bg-[#393957] z-[99999] flex items-center justify-center " >
               <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" rx="20" fill="#393957"/>
<path d="M48 30H53.5C61.7843 30 68.5 36.7157 68.5 45C68.5 53.2843 61.7843 60 53.5 60H48V54C48 51.7909 46.2091 50 44 50C41.7909 50 40 48.2091 40 46V45C40 42.7909 41.7909 41 44 41C46.2091 41 48 39.2091 48 37V30Z" fill="#C4FF35"/>
<path d="M32 40C32 34.4772 36.4772 30 42 30H44V34.3333C44 35.8061 42.8061 37 41.3333 37C38.3878 37 36 39.3878 36 42.3333V48.6667C36 51.6122 38.3878 54 41.3333 54C42.8061 54 44 55.1939 44 56.6667V65C44 67.7614 41.7614 70 39 70H37C34.2386 70 32 67.7614 32 65V40Z" fill="#C4FF35"/>
</svg>


            </div>
        )
    }
    else {
        return(<></>)
    } 
    
}