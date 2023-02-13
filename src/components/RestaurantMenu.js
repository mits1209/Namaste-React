// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {IMG_CDN_URL} from "../Constants";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const restaurant = useRestaurant(resId)
   
        return !restaurant ? (<Shimmer/>) :(
            <div className="flex justify-center">
                <div>
                <h2 className="text-2xl font-bold"> {restaurant?.name} </h2>
                <h1> restaurant id: {resId}</h1>
                
                <img className="w-96 p-4" src = {IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.cuisines}</h3>
                <h3>{restaurant?.avgRating}</h3>
                <h3>{restaurant?.costForTwoMsg}</h3>
                </div>
            
                <div className="p-8">
                    <h1>Menu</h1>
                    <ul>
                        {Object.values(restaurant?.menu?.items).map((item)=> (
                        <li key={item?.id}> 
                        {item?.name}
                        {item?.price}  
                         </li>
                       ))}; 
                    </ul>
                </div>
            </div>
        )
};
export default RestaurantMenu;