import { restrautList } from "../constants";
import RestruntCard from "./RestrauntCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  // let searchTxt = "KFC";

  //searchText is a local state variable
  //setSearchText is use to update the variable
  const [searchText, setSearchText] = useState(); //to create state variable.
  //useState returns an array ->[variable name, function to update the variable]

  // const searchClicked = false;
  // const [searchClicked, setSearchClicked] = useState("false");

  const [restaurants, setRestaurants] = useState(restrautList);

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
        {/* <h2>{searchClicked}</h2> */}
        <button
          className="search-btn"
          // onClick={(e) => {
          //   if (searchClicked == "false") {
          //     setSearchClicked("true");
          //   } else {
          //     setSearchClicked("false");
          //   }
          // }}

          onClick={(e) => {
            //need to filter the data among the restruntList
            //the update the restruntlist

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
