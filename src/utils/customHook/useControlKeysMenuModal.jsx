import {useEffect} from "react";

export function useControlKeysMenuModal(isFlatsHidden, formRef, currentEntrancesId, setCurrentEntrancesId, currentMenu, currentFlatsId, setCurrentFlatsId, setIsFlatsHidden, setCurrentMenu, openFlatsMenu) {

    useEffect(() => {

        function handleOnKeyDown(e) {
            if (!isFlatsHidden && e.ctrlKey && e.key === 'Enter') {
                formRef.current?.requestSubmit();
            }
            if (!isFlatsHidden && e.key === 'Tab') {
                e.preventDefault();
            }
            if (e.key === 'ArrowDown') {
                if(currentEntrancesId === 0){
                    setCurrentEntrancesId(1);
                } else if (currentMenu === 'entrances' && currentEntrancesId < 6) {
                    setCurrentEntrancesId((prev) => prev + 1);
                } else if (currentMenu === 'flats' && currentFlatsId < 6) {
                    setCurrentFlatsId((prev) => prev + 1);
                }
            }
            if (e.key === 'ArrowUp') {
                if (currentMenu === 'entrances' && currentEntrancesId > 1) {
                    setCurrentEntrancesId((prev) => prev - 1);
                } else if (currentMenu === 'flats' && currentFlatsId > 1) {
                    setCurrentFlatsId((prev) => prev - 1);
                }
            }
            if (e.key === 'ArrowRight' && isFlatsHidden && currentMenu === 'entrances') {
                setIsFlatsHidden(false);
                setCurrentMenu('flats');
                setCurrentFlatsId(0);
            }
            if (e.key === 'ArrowLeft' && !isFlatsHidden && currentMenu === 'flats') {
                setIsFlatsHidden(true);
                setCurrentMenu('entrances');
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                if (currentMenu === 'entrances' && currentEntrancesId <= 6 && currentEntrancesId > 0) {
                    const selector = `section:nth-child(1) > ul > li:nth-child(${currentEntrancesId}) > label > input`;
                    const inputElement = formRef.current?.querySelector(selector);
                    if(inputElement?.getAttribute('checked') === 'true') {
                        inputElement?.removeAttribute('checked');
                    } else {
                        inputElement?.setAttribute('checked', 'true');
                        openFlatsMenu();
                    }
                }
                if (currentMenu === 'flats' && currentFlatsId <= 6 && currentFlatsId > 0) {
                    const selector = `section:nth-child(2) > ul > li:nth-child(${currentFlatsId}) > label > input`;
                    const inputElement = formRef.current?.querySelector(selector);
                    if(inputElement?.getAttribute('checked') === 'true') {
                        inputElement?.removeAttribute('checked');
                    } else {
                        inputElement?.setAttribute('checked', 'true');
                    }
                }
            }
        }

        document.addEventListener('keydown', handleOnKeyDown);
        return () => {
            document.removeEventListener('keydown', handleOnKeyDown);
        };

    }, [currentEntrancesId, currentFlatsId, currentMenu, formRef, isFlatsHidden]);

}