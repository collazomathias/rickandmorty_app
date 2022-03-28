import React, { useEffect, useState } from "react";

import { Filters } from "./components/filters/Filters.jsx";
import { Elements } from "./components/elements/Elements.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";


function App() {

    let [ pageNumber, setPageNumber ] = useState(1);
    let [ data, setData ] = useState([]);
    let { info, results } = data;

    let api_url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

    useEffect(() => {
        (async function() {
            let data = await fetch(api_url).then((response) => response.json());
            setData(data);
        })();
    }, [api_url])

    return (
        <>
            <h1 className="text-center ubuntu my-5 fw-bold">Ricky <span className="text-primary">&</span> Morty</h1>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Filters />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <Elements results={results} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
