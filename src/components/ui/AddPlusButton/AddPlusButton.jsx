import addPlusIcon from "../../../assets/icons/add-icon.svg";
import classNames from "classnames";

const AddPlusButton = ({...arg}) => {

    const buttonClass = classNames({
        "button-default": true,
    });

    return (
        <button className={buttonClass} type="button" {...arg}>
            <img src={addPlusIcon} alt="Add Plus"/>
        </button>
    )
}
export default AddPlusButton;