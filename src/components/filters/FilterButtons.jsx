import React from "react";

const FilterButtons = ({task, setPageNumber, name, index, item}) => {
    return (
        <div>
            <style>
                {
                    `
                    .checked:checked + label {
                        background-color: #0b5ed7;
                        color: white;
                    }
                    input[type="radio"] {
                        display: none;
                    }
                    `
                }
            </style>
            <div className="form-check">
                <input
                    onClick={() => { 
                        setPageNumber(1);
                        task(item);
                    }}
                    className="form-check-input checked"
                    type="radio" 
                    name={name}
                    id={`${name}-${index}`}
                />
                <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>
                    {item}
                </label>
            </div>
        </div>
    );
}

export default FilterButtons;