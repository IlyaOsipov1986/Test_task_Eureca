import {Fragment} from "react";
import HouseCard from "../HouseCard/HouseCard.jsx";
import { houses } from "../../constants.js";
import useGetHouse from "../../utils/customHook/useGetHouse.jsx";

const HouseList = () => {

    const {houseList} = useGetHouse(houses);

    return(
        <main className="house-list">
            {houseList && houseList.length > 0 ?
                houseList.map((house) => {
                    return (
                        <Fragment key={house.id}>
                            <HouseCard {...house}/>
                        </Fragment>
                    )
                }) : <p>Ошибка получения данных!</p>
            }
        </main>
    )
}
export default HouseList;