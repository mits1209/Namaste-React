import { useEffect, useState } from 'react';
// import {restaurantList} from '../Constants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
    const filterData= restaurants.filter((restaurant) => 
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
return filterData;
};


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");     // returns = [variable name, function to update the variable]
    const [filteredrestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.218575834858875&lng=78.16095163867622&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json)
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   };

//    not render component (Early return)
   if(allRestaurants === 0) return null;
   
   {if(filteredrestaurants?.length === 0) return <h1> No Restaurant match your Filter!!</h1>};

    return (allRestaurants.length === 0) ? <Shimmer /> :  (
        <>
        <div className="search-container">
            <input 
            type="text" 
            className="search-input" 
            placeholder="Search" 
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
            /> 
            <button className='search-btn' onClick={()=>{
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>
       <div className='restaurant-List'>
        {    
        filteredrestaurants.map((restaurant) => {
         return <RestaurantCard {...restaurant.data} key={restaurant.data.key}/>;
         }  )}
       </div>
       </>
    );
 };

 export default Body;