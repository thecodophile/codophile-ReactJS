import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // How to read a dynamic URL Params
  //   const params = useParams();
  //   console.log(params);
  //destructing
  //   const { id } = params;
  //some cool developers also do this
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurnatInfo();
  }, []);

  async function getRestaurnatInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=22.572646&lng=88.36389500000001&menuId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  // if (!restaurant) {
  //   return <Shimmer />;
  // }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} Stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
