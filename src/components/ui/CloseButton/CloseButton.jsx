import closeIcon from "../../../assets/icons/close-icon.svg";
import classNames from "classnames";

const CloseButton = ({...arg}) => {

    const buttonClass = classNames({
        "button-default": true,
    });

    return (
        <button className={buttonClass} {...arg} type="button">
            <img src={closeIcon} alt="deleteIcon" />
        </button>
    )
}
export default CloseButton;