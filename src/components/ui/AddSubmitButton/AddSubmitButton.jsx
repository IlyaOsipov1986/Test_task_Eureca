import classNames from "classnames";

const AddSubmitButton = ({children,...arg}) => {

    const buttonClass = classNames({
        "button-default" : true,
        "button-submit" : true
    });

    return (
        <button className={buttonClass} type="button" {...arg}>
            {children}
        </button>
    )
}
export default AddSubmitButton;