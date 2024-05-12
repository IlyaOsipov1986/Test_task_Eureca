import {useEffect} from "react";

export function useCloseModal(closeModal) {
    useEffect(() => {

        function handleOnPressEsc(e) {
            if(e.key === 'Escape') {
                closeModal();
            }
        }

        document.addEventListener('keydown', handleOnPressEsc);
        return () => {
            document.removeEventListener('keydown', handleOnPressEsc);
        };

    }, [closeModal]);
}