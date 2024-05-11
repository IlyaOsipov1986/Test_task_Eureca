import AddSubmitButton from "../ui/AddSubmitButton/AddSubmitButton.jsx";
import {useRef, useState} from "react";
import CloseButton from "../ui/CloseButton/CloseButton.jsx";

const MenuModal = () => {

    const [currentMenu, setCurrentMenu] = useState('entrances');
    const [isFlatsHidden, setIsFlatsHidden] = useState(true);
    const [currentEntrancesId, setCurrentEntrancesId] = useState(0);
    const [currentFlatsId, setCurrentFlatsId] = useState(0);
    const entrances = [...Array(6)];
    const flats = [...Array(6)];
    const formRef = useRef(null);

    function openFlatsMenu() {
        setIsFlatsHidden(false);
        setCurrentMenu('flats');
    }

    function closeFlatsMenu() {
        setIsFlatsHidden(true);
        setCurrentMenu('entrances');
    }

    return (
        <form className="menu" ref={formRef}>
            <section className="menu__section">
                <div className="menu__header">
                    <h2 className="menu__heading">Номер подъезда</h2>
                    <CloseButton/>
                </div>
                <ul className="menu__content">
                    {
                        entrances.map((_, index) => {
                            const id = index + 1;
                            return (
                                <li className="menu__item" key={index} onClick={openFlatsMenu}>
                                    <label>
                                        <input className="menu__input" type='checkbox' name={`entrance-${id}`}
                                               value={id} hidden/>
                                        <span
                                            className={`'menu__span' ${currentEntrancesId === id && styles.menu__span_current}`}>Подъезд {id}</span>
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
                            flats.map((_, index) => {
                                const id = index + 1;
                                return (
                                    <li className="menu__item" key={index}>
                                        <label>
                                            <input className="menu__input" type='checkbox' name={`flat-${id}`}
                                                   value={id} hidden/>
                                            <span
                                                className={`"menu__span" ${currentFlatsId === id} && "menu__span_current"`}>Квартира {id}</span>
                                        </label>
                                    </li>
                                )
                            })
                        }
                        <AddSubmitButton type='submit'>
                            Добавить
                        </AddSubmitButton>
                    </ul>
                </section>
            }
        </form>
    )
}
export default MenuModal;