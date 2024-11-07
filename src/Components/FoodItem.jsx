import React from 'react'
  import { CDN_IMAGE_URL } from '../Utils/Contants';
const FoodItem = (props) => {
    
    const {resData}=props;
    const {name,avgRating,cloudinaryImageId,sla,cuisines,areaName}=resData?.info

     
        
    
  return (
    <>
        <div className='shadow w-[300px] h-[350px]  rounded card2'>
    
            <img  className='rounded-lg h-1/2 w-full' src={CDN_IMAGE_URL+cloudinaryImageId} alt="" />
            <div className='m-4'>
                <p className='font-semibold text-xl'>{name}</p>
                <p><i className="fa-solid text-green-800 mt-2 fa-star"></i><span>{avgRating}</span><span className='font-semibold'> .{sla.slaString}</span> </p>
                <p className='text-slate-500 mt-2' >{cuisines.join(', ')}</p>
                <p className='text-slate-500 mt-2' >{areaName}</p>
                 
            </div>
          
             
        </div>
    </>
  )
}

export default FoodItem