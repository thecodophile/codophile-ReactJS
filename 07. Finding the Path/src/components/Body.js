import { restrautList } from "../constants";
import RestruntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allrestaurant, setAllRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredrestaurants, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurnts();
  }, []);

  async function getRestaurnts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("Render");

  if (!allrestaurant) return null;

  return allrestaurant.length === 0 ? (
    <Shimmer />
  ) : (
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
        <button
          className="search-btn"
          onClick={(e) => {
            const data = filterData(searchText, allrestaurant);
            setfilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredrestaurants.length === 0 ? (
          <h2>No Restaurnat match your Filter</h2>
        ) : (
          filteredrestaurants.map((restraut) => {
            return (
              <Link
                to={"/restaurant/" + restraut.data.id}
                key={restraut.data.id}
              >
                <RestruntCard {...restraut.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
