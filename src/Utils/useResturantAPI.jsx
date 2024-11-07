import  { useEffect, useState } from 'react'
import { MENU_URL } from './Contants'

const useResturantAPI = (id) => {

    const [menuRestaurant,setmenuRestaurant]=useState(null)

    useEffect(() => {
        // Ensure the effect runs when the `id` changes
        
          fetchAPI();
        
      }, []);

     const fetchAPI=async ()=>{
        
        const data= await fetch(MENU_URL+id)
        const json= await data.json();
        console.log(json);
        setmenuRestaurant(json.data)

     }
     
  return menuRestaurant;
}

export default useResturantAPI