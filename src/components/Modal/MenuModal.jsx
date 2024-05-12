import AddSubmitButton from "../ui/AddSubmitButton/AddSubmitButton.jsx";
import { useRef, useState } from "react";
import CloseButton from "../ui/CloseButton/CloseButton.jsx";
import {useControlKeysMenuModal} from "../../utils/customHook/useControlKeysMenuModal.jsx";
import {useCloseModal} from "../../utils/customHook/useCloseModal.jsx";
import { getValueDefaultChecked, onButtonClickGetFlat } from "../../utils/scripts.js";

const MenuModal = (props) => {

    const {
        tableData,
        setTableData,
        closeModal
    } = props;

    const [currentMenu, setCurrentMenu] = useState('entrances');
    const [isFlatsHidden, setIsFlatsHidden] = useState(true);
    const [currentEntrancesId, setCurrentEntrancesId] = useState(0);
    const [currentFlatsId, setCurrentFlatsId] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const entrancesList = [...Array(6)];
    const flatsList = [...Array(6)];
    const [dataSelect, setDataSelect] = useState([]);
    const formRef = useRef(null);

    // Инициализация массива рефов
    const itemsFlatRef = flatsList.map(() => useRef(null));

    // Привязка рефов к элементам
    const setCallbackRef = (index) => (element) => {
        itemsFlatRef[index].current = element;
    };

    useCloseModal(closeModal);

    useControlKeysMenuModal(
        isFlatsHidden,
        formRef,
        currentEntrancesId,
        setCurrentEntrancesId,
        currentMenu,
        currentFlatsId,
        setCurrentFlatsId,
        setIsFlatsHidden,
        setCurrentMenu);

    function handleOnSubmit(e) {
        e.preventDefault();

        const filterEmptyEntrances = dataSelect.filter(elem => elem.flats.length !== 0);

        setTableData([...tableData, ...filterEmptyEntrances]);
        setErrorMessage('');
        setCurrentEntrancesId(0);
        setDataSelect([]);
        closeModal();
    }

    function openFlatsMenu(id) {
        setIsFlatsHidden(false);
        setCurrentMenu('flats');
        setCurrentEntrancesId(id);
    }

    function closeFlatsMenu() {
        setIsFlatsHidden(true);
        setCurrentMenu('entrances');
        setCurrentEntrancesId(0);
    }

    return (
        <div className="modal">
            <form className="menu" onSubmit={handleOnSubmit} ref={formRef} onClick={(e) => e.stopPropagation()}>
                <section className="menu__section">
                    <div className="menu__header">
                        <h2 className="menu__heading">Номер подъезда</h2>
                        <CloseButton onClick={() => closeModal()}/>
                    </div>
                    <ul className="menu__content">
                        {
                            entrancesList.map((_, index) => {
                                const id = index + 1;
                                return (
                                    <li className="menu__item" key={index} onClick={() => openFlatsMenu(id)}>
                                        <label>
                                            <span
                                                className={`menu__span ${currentEntrancesId === id && 'menu__span_current'}`}>Подъезд {id}</span>
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                {
                !isFlatsHidden &&
                <section className="menu__section">
                    <div className="menu__header">
                        <h2 className="menu__heading">Номер квартиры</h2>
                        <CloseButton onClick={closeFlatsMenu}/>
                    </div>
                    <ul className="menu__content">
                        {
                            flatsList.map((_, index) => {
                                const id = index + 1;
                                return (
                                    <li className="menu__item"
                                            key={index}
                                            onClick={() => onButtonClickGetFlat(id, index, itemsFlatRef, dataSelect, currentEntrancesId, setDataSelect)}>
                                        <label>
                                            <input
                                                ref={setCallbackRef(index)}
                                                checked={getValueDefaultChecked(id, dataSelect, currentEntrancesId) ?? ''}
                                                onChange={e => (e.target.checked)}
                                                className="menu__input" type='checkbox' hidden
                                            />
                                            <span
                                                className={`menu__span ${currentFlatsId === id && 'menu__span_current'}`}>Квартира {id}</span>
                                        </label>
                                    </li>
                                )
                            })
                        }
                        <AddSubmitButton type='submit'>
                            Добавить
                        </AddSubmitButton>
                        {errorMessage && <p className="menu__error-message">{errorMessage}</p>}
                    </ul>
                </section>
                }
            </form>
        </div>
        )
}
export default MenuModal;