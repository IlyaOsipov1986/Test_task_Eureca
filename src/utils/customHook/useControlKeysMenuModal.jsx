import {useEffect} from "react";

export function useControlKeysMenuModal(
    isFlatsHidden,
    formRef,
    currentEntrancesId,
    setCurrentEntrancesId,
    currentMenu,
    currentFlatsId,
    setCurrentFlatsId,
    setIsFlatsHidden,
    setCurrentMenu) {

    useEffect(() => {

        function handleOnKeyDown(e) {
            e.preventDefault();
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
        }

        document.addEventListener('keydown', handleOnKeyDown);
        return () => {
            document.removeEventListener('keydown', handleOnKeyDown);
        };

    }, [currentEntrancesId, currentFlatsId, currentMenu, formRef, isFlatsHidden]);

}