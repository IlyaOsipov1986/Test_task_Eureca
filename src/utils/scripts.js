//---Функция для получения установленных флажков для квартир---//
export function getValueDefaultChecked(flatId, dataSelect, currentEntrancesId) {
    const findEntrance = dataSelect.find(item => item.entrance === currentEntrancesId);
    if(findEntrance) {
        const findFlat = findEntrance.flats.find(el => el === flatId);
        return !!findFlat;
    }
}

//---Функция для получения/удаления квартиры из объекта таблицы---//
export function onButtonClickGetFlat(id, index, itemsFlatRef, dataSelect, currentEntrancesId, setDataSelect) {
    const findCurrentRef = itemsFlatRef.find((el, i) => i === index);
    const findEntrance = dataSelect.find(item => item.entrance === currentEntrancesId);
    if (findCurrentRef.current.checked) {
        if (findEntrance) {
            const changedEntrance = {...findEntrance, flats: [...findEntrance.flats, id].sort((a, b) => a - b)};
            const updatedEntrance = dataSelect.map(el => el.entrance === changedEntrance.entrance ? changedEntrance : el);
            return setDataSelect(updatedEntrance);
        } else {
            return setDataSelect([...dataSelect, {
                entrance: currentEntrancesId,
                flats: [id]
            }]);
        }
    } else {
        if (findEntrance) {
            const changedEntrance = {...findEntrance, flats: findEntrance.flats.filter(el => el !== id )};
            const updatedEntrance = dataSelect.map(el => el.entrance === changedEntrance.entrance ? changedEntrance : el);
            return setDataSelect(updatedEntrance);
        }
    }
}
