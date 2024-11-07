import { useEffect, useState } from "react"

const useOnlineStatus = () => {
  
    const[online,setOnine]=useState(true)

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnine(false)

        })
        window.addEventListener("online",()=>{
            setOnine(true)

        })
    },[])


  return online
}

export default useOnlineStatus