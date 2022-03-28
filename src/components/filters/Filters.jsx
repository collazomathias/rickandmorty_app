import React from "react";
import { Gender } from "./categories/Gender";
import { Species } from "./categories/Species";
import { Status } from "./categories/Status";

export const Filters = ({setStatus, setGender, setSpecies, setPageNumber}) => {
    let clearFilters = () => {
        setStatus("");
        setGender("");
        setSpecies("");
        setPageNumber(1);
        window.location.reload(false);
    }

    return (
        <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-4">
                Filter
            </div>
            <div onClick={clearFilters} style={{cursor: "pointer"}} className="mb-4 text-center text-primary text-decoration-underline">
                Clear filters
            </div>
            <div className="accordion" id="accordionExample">
                <Status setStatus={setStatus} setPageNumber={setPageNumber} />
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Gender setGender={setGender} setPageNumber={setPageNumber} />
            </div>
        </div>
    );
}