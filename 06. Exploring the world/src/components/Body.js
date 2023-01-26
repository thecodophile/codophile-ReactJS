import { restrautList } from "../constants";
import RestruntCard from "./RestrauntCard";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  // fetch()
  // it is not a good place to fetch an api, any time my UI is updated it rerender
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrautList);

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
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("Render");

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
        <button
          className="search-btn"
          onClick={(e) => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restraut) => {
          return <RestruntCard {...restraut.data} key={restraut.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
