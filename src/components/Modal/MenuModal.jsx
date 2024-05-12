import AddSubmitButton from "../ui/AddSubmitButton/AddSubmitButton.jsx";
import { useRef, useState } from "react";
import CloseButton from "../ui/CloseButton/CloseButton.jsx";
import {useControlKeysMenuModal} from "../../utils/customHook/useControlKeysMenuModal.jsx";
import {useCloseModal} from "../../utils/customHook/useCloseModal.jsx";

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

    const itemsFlatRef = flatsList.map(() => useRef(null)); // Инициализация массива рефов

    useCloseModal(closeModal);

    const setCallbackRef = (index) => (element) => {
        itemsFlatRef[index].current = element;
    };

    function getValueDefaultChecked(flatId) {
        const findEntrance = dataSelect.find(item => item.entrance === currentEntrancesId);
        if(findEntrance) {
            const findFlat = findEntrance.flats.find(el => el === flatId);
            return !!findFlat;
        }
    }

    useControlKeysMenuModal(isFlatsHidden, formRef, currentEntrancesId, setCurrentEntrancesId, currentMenu, currentFlatsId, setCurrentFlatsId, setIsFlatsHidden, setCurrentMenu, openFlatsMenu);

    function handleOnSubmit(e) {
        e.preventDefault();

        const filterEmptyEntrances = dataSelect.filter(elem => elem.flats.length !== 0);

        setTableData([...tableData, ...filterEmptyEntrances]);
        setErrorMessage('');
        setCurrentEntrancesId(0);
        closeModal();
    }

    console.log(dataSelect)

    function openFlatsMenu(id) {
        setIsFlatsHidden(false);
        setCurrentMenu('flats');
        setCurrentEntrancesId(id);
    }

    function onButtonClickGetFlat(id, index) {
        const findCurrentRef = itemsFlatRef.find((el, i) => i === index);
        const findEntrance = dataSelect.find(item => item.entrance === currentEntrancesId);
        if (findCurrentRef.current.checked) {
            if (findEntrance) {
                const changedEntrance = {...findEntrance, flats: [...findEntrance.flats, id].sort((a, b) => a - b)};
                const updatedEntrance = dataSelect.map(el => el.entrance === changedEntrance.entrance ? changedEntrance : el);
                setDataSelect(updatedEntrance);
            } else {
                setDataSelect([...dataSelect, {
                    entrance: currentEntrancesId,
                    flats: [id]
                }]);
            }
        } else {
            if (findEntrance) {
                    const changedEntrance = {...findEntrance, flats: findEntrance.flats.filter(el => el !== id )};
                    const updatedEntrance = dataSelect.map(el => el.entrance === changedEntrance.entrance ? changedEntrance : el);
                    setDataSelect(updatedEntrance);
                }
            }
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
                                    <li className="menu__item" key={index} onClick={() => onButtonClickGetFlat(id, index)}>
                                        <label>
                                            <input ref={setCallbackRef(index)} checked={getValueDefaultChecked(id, index)} className="menu__input" type='checkbox' hidden/>
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