import { useState } from 'react';
import {restaurantList} from '../Constants';
import RestaurantCard from './RestaurantCard';


function filterData(searchText, restaurants) {
    const filterData= restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText));
return filterData;
};


const Body = () => {
    // const searchTxt ="KFC";
    const [searchText, setSearchText] = useState("");     // returns = [variable name, function to update the variable]
   
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
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
                const data = filterData(searchText, restaurants);
                setRestaurants(data);
            }}>Search</button>
        </div>
       <div className='restaurant-List'>
        {restaurants.map((restaurant) => {
         return <RestaurantCard {...restaurant.data} key={restaurant.data.key}/>;
         }  )}
       </div>
       </>
    );
 };

 export default Body;