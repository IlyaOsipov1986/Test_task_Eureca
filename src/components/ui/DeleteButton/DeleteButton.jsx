import deleteIcon from "../../../assets/icons/delete-icon.svg";
import classNames from "classnames";

const DeleteButton = ({...arg}) => {

    const buttonClass = classNames({
        "button-default": true,
    });

    return (
        <button className={buttonClass} {...arg} type="button">
            <img src={deleteIcon} alt="deleteIcon" />
        </button>
    )
}
export default DeleteButton;