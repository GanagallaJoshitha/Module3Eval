import React from 'react'
const RestaurantCard = ({restaurant})=> {
    return(
        <div>
            <img src = {restaurant.image} alt = {restaurant.restaurantName}/>
            <h2>
                {restaurant.restaurantName}
            </h2>
            <p>
                {restaurant.address}
            </p>
            <p>Parking : {restaurant.parkingLot? 'Yes' : 'No'}</p>
        </div>
    );
};
export default RestaurantCard;