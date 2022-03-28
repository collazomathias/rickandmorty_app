import React, { useEffect, useState } from "react";
import { Elements } from "../components/elements/Elements.jsx";
import { InputGroup } from "../components/filters/categories/InputGroup.jsx";

export const Location = () => {

    const [ location, setLocation ] = useState(1);
    const [ info, setInfo ] = useState([]);
    const [ results, setResults] = useState([]);
    const [ locationsCount, setLocationsCount ] = useState();
    let { name, type, dimension } = info;

    let locations_count_url = `https://rickandmortyapi.com/api/location`;
    let locations_url = `https://rickandmortyapi.com/api/location/${location}`;

    useEffect(() => {
        (async function() {
            let data = await fetch(locations_url).then(response => response.json());
            setInfo(data);
            let residents = await Promise.all(data.residents.map(async (element) => {
                const response = await fetch(element);
                return await response.json();
            }));
            setResults(residents);
        })()
    }, [locations_url]);

    useEffect(() => {
        (async function() {
            let count = await fetch(locations_count_url).then(response => response.json());
            setLocationsCount(count.info.count);
        })()
    }, [locations_count_url]);

    return ( 
        <div className="container">
            <div className="row mb-4">
                <h1 className="text-center mb-4">Location: <span className="text-primary">{name === "" ? "Unknown" : name}</span>.</h1>
                <h5 className="text-center">Dimension: {dimension === "" ? "Unknown" : dimension}.</h5>
                <h5 className="text-center">Type: {type === "" ? "Unknown" : type}.</h5>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12">
                    <h4 className="text-center mb-4">Pick a location:</h4>
                    <InputGroup setEpisode={setLocation} name="Location" count={locationsCount} />
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Elements page="/location/" results={results} />
                    </div>
                </div>
            </div>
        </div>
    );
}