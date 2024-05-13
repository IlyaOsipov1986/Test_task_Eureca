import {useEffect, useState} from "react";

function useGetHouse(houses) {

    const [houseList, setHouseList] = useState([]);

    useEffect(() => {

        let isMount = true;

        if(houses && houses.length !== 0) {
            isMount && setHouseList(houses)
        } else {
            isMount && setHouseList([]);
        }

        return () => {
            isMount = false;
        }
    },[houses])

    return {houseList};
}
export default useGetHouse;