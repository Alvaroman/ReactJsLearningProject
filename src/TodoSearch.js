import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
    const [searchValue, setSearchValue] = React.useState("");

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return [
        <input className="TodoSearch"
            placeholder="Write..."
            value={searchValue}
            onChange={onSearchValueChange} />,
        <p> {searchValue}</p>
    ];
}

export { TodoSearch };
