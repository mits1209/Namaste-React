import { useEffect, useState } from 'react';
// import {restaurantList} from '../Constants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import {Link} from "react-router-dom";
import { filterData } from '../Utils/helper';
// import { GET_RESTAURANT } from "../Constants";
// import useOnline from '../Utils/useOnline';
import useGetRestaurant from '../Utils/useGetRestaurant';


const Body = () => {
        
    const [searchText, setSearchText] = useState("");     // returns = [variable name, function to update the variable]
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const restaurantData = useGetRestaurant(setAllRestaurants, setFilteredRestaurants);

//    not render component (Early return)
   if(restaurantData === 0) return null;
   
//    {if(filteredrestaurants?.length === 0) return <h1> No Restaurant match your Filter!!</h1>};



    return (allRestaurants.length === 0) ? <Shimmer />:  ( 
        <>
        <div className="search-container p-5 bg-amber-100 my-5">
            <input 
            type="text" 
            className="focus:bg-lime-100 p-2 m-2" 
            placeholder="Search" 
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
            /> 
            <button 
            className="p-2 m-5 bg-orange-700 hover:bg-orange-800 text-white rounded-md"
            onClick={()=>{
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
            }}
            >
            Search
            </button>
        </div>
       <div className='flex flex-wrap'>
        {    
        filteredRestaurants.map((restaurant) => {
         return (
            <Link 
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
            >
            <RestaurantCard {...restaurant.data} />
         </Link>
        );
         }  )}
       </div>
       </>
    );
 };

 export default Body;