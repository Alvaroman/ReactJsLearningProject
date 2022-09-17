import React from "react";
import "./CreateTodoButton.css";
const CreateTodoButton = () => {
    const onClickButton = (msg) => {
        console.log(msg);
    }
    return (<>
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton("this is the message")}
        >
            +
        </button>
    </>);
}

export { CreateTodoButton };