import { IMG_CDN_URL } from '../Constants';

const RestaurantCard = ({
    name, 
    cuisines, 
    cloudinaryImageId, 
    avgRating,
    deliveryTime,
    costForTwoString,
  }) => {
     return (
        <div className="w-[200px] p-2 m-2 shadow-lg bg-amber-50"> 
           <img 
           src= {
            IMG_CDN_URL + 
              cloudinaryImageId}/>
           <h2 className="font-bold text-xl">{name}</h2>
           <h3>{cuisines.join(", ")}</h3>
           <div className="flex justify-between">
           <h4 className="bg-green-500 text-sm text-white w-9 display: inline"> ✰{avgRating } </h4>
           <p6 className="text-sm"> {costForTwoString} </p6>
           <p6 className="text-sm"> {deliveryTime} </p6>
           </div>
        </div>
     )
  }
  export default RestaurantCard;