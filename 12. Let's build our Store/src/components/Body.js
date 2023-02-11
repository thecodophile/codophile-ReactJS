import { restrautList } from "../constants";
import RestruntCard from "./RestrauntCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allrestaurant, setAllRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredrestaurants, setfilteredRestaurant] = useState([]);

  const { user, setUser } = useContext(UserContext);

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

  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>🛑Offline, please check your internet connection!</h1>;
  // }

  console.log("Render");

  if (!allrestaurant) return null;

  // const searchbtn = {
  //   backgroundColor: "till",
  //   color: "white",
  // };

  return allrestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-2 bg-pink-50 my-2 ">
        <input
          type="text"
          className="focus:bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          // className="search-btn"
          // style={searchbtn}
          // style={{
          //   backgroundColor: "teal",
          //   color: "black",
          // }}
          className="text-xl text-white bg-purple-500 hover:bg-purple-700 hover:first-letter:font-bold  p-1 m-1 rounded "
          onClick={(e) => {
            const data = filterData(searchText, allrestaurant);
            setfilteredRestaurant(data);
          }}
        >
          Search
        </button>

        <input
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </div>
      <div className="flex flex-wrap">
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
