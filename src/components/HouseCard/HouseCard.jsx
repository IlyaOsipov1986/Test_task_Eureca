import DeleteButton from "../ui/DeleteButton/DeleteButton.jsx";
import AddPlusButton from "../ui/AddPlusButton/AddPlusButton.jsx";
import Table from "../ui/Table/Table.jsx";
import {useState} from "react";
import Modal from "../Modal/Modal.jsx";

const HouseCard = ({...house}) => {

    const [tableData, setDataTable] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onButtonClickDelete = () => {
        setDataTable([]);
    }

    return (
        <section className="house-card">
            <div className="house-card__header">
                <h3>{house.numberHouse}</h3>
                <div style={{ display: "flex", flexDirection: "row", gap:'8px' }}>
                    <DeleteButton onClick={onButtonClickDelete}/>
                    <AddPlusButton onClick={() => setIsOpenModal(!isOpenModal)}/>
                </div>
            </div>
            <Table tableData={tableData} />
            {isOpenModal && <Modal/>}
        </section>
    )
}
export default HouseCard;