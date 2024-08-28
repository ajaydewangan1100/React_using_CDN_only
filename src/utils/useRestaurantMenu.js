import { useEffect, useState } from "react";
import { RES_MENU_FETCH_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // fetchData
  useEffect(() => {
    fetchData(resId);
  }, []);

  //   FetchData function
  const fetchData = async (resId) => {
    const response = await fetch(
      RES_MENU_FETCH_API[0] + resId + RES_MENU_FETCH_API[1]
    );
    const data = await response.json();
    setResInfo(data);
  };

  //   Return data
  return resInfo;
};

export default useRestaurantMenu;
