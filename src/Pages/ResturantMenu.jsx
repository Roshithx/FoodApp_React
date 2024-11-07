
import ShimmerUI from '../Components/ShimmerUI';
import { useParams } from 'react-router-dom';
import useResturantAPI from '../Utils/useResturantAPI';

const RestaurantMenu = () => {

  const {id} = useParams()

  const menuRestaurant = useResturantAPI(id)
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla
  } = menuRestaurant?.cards[2]?.card?.card?.info || {};

  return menuRestaurant === null ? (
    <ShimmerUI />
  ) : (
    <>
    <div className='container mx-auto'>
    <h1 className='font-semibold text-2xl  mt-10'>{name}</h1>
      <div className=' justify-center container mx-auto shadow-sm shadow-slate-600 rounded-lg border p-5 items-center mt-10'>
        <p>
          <i className="fa-solid text-green-800 mt-2 fa-star font-semibold"></i>
          <span className='font-semibold'>{avgRating} ({totalRatingsString}). <span>{costForTwoMessage}</span></span>
        </p>
        <p className='text-orange-500 mt-2'>{cuisines.join(", ")}</p>
         <ul>
            <li> <p className='font-semibold mt-1'>Outlet: <span className='font-normal'>{areaName}</span> </p></li>
            <li><p className='font-semibold mt-1'>{sla.slaString.toLowerCase()}</p></li>
         </ul>
      </div> 
    </div>
     
    </>
  );
};

export default RestaurantMenu;
