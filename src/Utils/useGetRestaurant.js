import { useState, useEffect } from "react";
import {GET_RESTAURANT} from "../Constants";


const useGetRestaurant = (setAllRestaurants, setFilteredRestaurants) => {
    //  const [allRestaurants, setAllRestaurants] = useState([]);
  
    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(
            GET_RESTAURANT)
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
       };
       return [setAllRestaurants, setFilteredRestaurants];
    };
 
export default useGetRestaurant;