import React from "react";
import FilterButtons from "../FilterButtons";

export const Species = ({setSpecies, setPageNumber}) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button 
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    Gender
                </button>
            </h2>
            <div 
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                    <div className="accordion-body d-flex flex-wrap gap-3">
                        {species.map((item, index) => <FilterButtons task={setSpecies} setPageNumber={setPageNumber} key={index} name="species" index={index} item={item} />)}
                    </div>
            </div>
        </div>
    );
}