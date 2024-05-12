import { useContext } from "react";
import AppContext from "../../../src/context/AppContext.jsx";

const useAppContext = () => {
    return useContext(AppContext);
}
export default useAppContext;