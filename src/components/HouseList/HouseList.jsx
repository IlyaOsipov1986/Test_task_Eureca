import {Fragment, useState} from "react";
import HouseCard from "../HouseCard/HouseCard.jsx";
import { houses } from "../../constants.js";

const HouseList = () => {

    const [houseList, setHouseList] = useState(houses || []);

    return(
        <main className="house-list">
            {houseList && houseList.length > 0 ?
                houseList.map((house, i) => {
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