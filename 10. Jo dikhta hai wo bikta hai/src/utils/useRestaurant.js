import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurnatInfo();
  }, []);

  async function getRestaurnatInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

  return restaurant;
};
export default useRestaurant;
