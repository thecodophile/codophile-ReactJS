import { restrautList } from "../constants";
import RestruntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // fetch()
  // it is not a good place to fetch an api, any time my UI is updated it rerender
  const [allrestaurant, setAllRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredrestaurants, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    // API call
    getRestaurnts();
  }, []);

  async function getRestaurnts() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("Render");

  // Conditional rendering
  // if restaurant is empty => shimmer UI
  // if restaurant has data => actual data UI

  //not render component(Early retrun)
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
            return <RestruntCard {...restraut.data} key={restraut.data.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
