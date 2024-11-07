import React, { useEffect, useState } from 'react';
import FoodItem from '../Components/FoodItem';
import ShimmerUI from '../Components/ShimmerUI';

import { Link } from 'react-router-dom';
import Dino from '../assets/dino.gif'

const View = () => {
  const [listResturant, setResturant] = useState([]);
  const [filterRestuarant,setFilterRestuarant]=useState([]);

  const [searchInput,setSearchinput]=useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
       console.log(json);
       setResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilterRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  

  return listResturant.length===0 ? <ShimmerUI/> :(
    <>
      <div className='body mt-5'>
        <div className='container mx-auto'>
          <input type="text" value={searchInput} onChange={(e)=>{setSearchinput(e.target.value)
               
          }}
           placeholder='Search FoodItems' className='border rounded-lg w-72 p-3' />
          <button onClick={()=>{
             const SearchRestuarant=listResturant.filter((item)=>item.info.name.toLowerCase().includes(searchInput.toLowerCase()))
             setFilterRestuarant(SearchRestuarant);
          }} className='ms-3'><i className="fa-solid fa-magnifying-glass"></i></button>
          {}
          <div className='mt-6'>
            <button onClick={() => {
              const filterlist = listResturant.filter((item) => item.info.avgRating > 4.0);
              setFilterRestuarant(filterlist);
            }} className='p-2 py-3 shadow border border-gray-200 rounded-3xl  hover:border-black  text-[15px]'>Rated 4.0+</button>
          </div>
        </div>
        <div className='foodcard mt-10 container mx-auto flex flex-wrap gap-6'>
          {filterRestuarant.map(item => 
             <Link key={item.info.id} to={`/menu/${item.info.id}`}>
             <FoodItem resData={item} />
           </Link>           
           )}
  
        </div>
      </div>
    </>
  );
};

export default View;
