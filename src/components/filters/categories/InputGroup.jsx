import React from "react";

export const InputGroup = ({count, name, setEpisode}) => {
    return (
        <div className="input-group mb-3">
            <select 
                className="form-select" 
                id={name}
                onChange={(event) => setEpisode(event.target.value)}>
                {
                    [...Array(count).keys()].map(element => {
                        return (
                            <option key={element + 1} value={element + 1}>{name} N°{element + 1}</option>
                        );
                    })
                }
            </select>
        </div>
    );
}