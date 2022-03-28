import React from "react";
import styles from "./Search.module.scss";

export const Search = ({setSearch, setPageNumber}) => {
    return (
        <form className="d-flex flex-sm-row align-items-center justify-content-center gap-4 mb-5">
            <input placeholder="Search for characters here..." type="text" className={styles.input} 
                onChange={
                    event => {
                        setPageNumber(1);
                        setSearch(event.target.value);
                    }
                }
            />
        </form>
    );
}