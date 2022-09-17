import React from "react";
import "./TodoItem.css";

const TodoList = (props) => {
    return (<section>
        <ul>
            {props.children}
        </ul>
    </section>);
}

export { TodoList };
