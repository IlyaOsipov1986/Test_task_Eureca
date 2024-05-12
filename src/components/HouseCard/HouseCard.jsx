import DeleteButton from "../ui/DeleteButton/DeleteButton.jsx";
import AddPlusButton from "../ui/AddPlusButton/AddPlusButton.jsx";
import Table from "../ui/Table/Table.jsx";
import {useState} from "react";
import {useOnClickOutsideModal} from "../../utils/customHook/useOnClickOutsideModal.jsx";
import MenuModal from "../Modal/MenuModal.jsx";

const HouseCard = ({...house}) => {

    const [tableData, setTableData] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onButtonClickDelete = () => {
        setTableData([]);
    }

    useOnClickOutsideModal(isOpenModal, () => setIsOpenModal(false))

    const onButtonClickOpenModal = (e) => {
        e.stopPropagation();
        if(isOpenModal) {
            setIsOpenModal(false)
        } else {
            setIsOpenModal(true)
        }
    }

    return (
        <section className="house-card">
            <div className="house-card__header">
                <h3>{house.numberHouse}</h3>
                <div style={{ display: "flex", flexDirection: "row", gap:'8px' }}>
                    <DeleteButton onClick={onButtonClickDelete}/>
                    <AddPlusButton onClick={onButtonClickOpenModal}/>
                </div>
            </div>
            <Table tableData={tableData} />
            {isOpenModal && <MenuModal
                tableData={tableData}
                setTableData={setTableData}
                closeModal={() => setIsOpenModal(false)}
            />}
        </section>
    )
}
export default HouseCard;