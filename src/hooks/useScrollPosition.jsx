import { useEffect, useState } from "react";

export function useScrollPosition(){
    const [isBottom, setIsBottom] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            // console.log(window.innerHeight);
            // console.log(document.documentElement.scrollTop);
            // console.log(document.documentElement.offsetHeight);
            setIsBottom(window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.offsetHeight);
        })
    },[])
    return {isBottom};
}