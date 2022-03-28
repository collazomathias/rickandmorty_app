import React, { useEffect, useState } from "react";
import { Filters } from "./components/filters/Filters.jsx";
import { Elements } from "./components/elements/Elements.jsx";
import { Pagination } from "./components/pagination/Pagination.jsx";
import { Search } from "./components/search/Search.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";


function App() {

    const [ pageNumber, setPageNumber ] = useState(1);
    const [ data, setData ] = useState([]);
    const [ search, setSearch ] = useState("");
    const [ status, setStatus ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ species, setSpecies ] = useState("");
    let { info, results } = data;

    let api_url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        (async function() {
            let data = await fetch(api_url).then((response) => response.json());
            setData(data);
        })();
    }, [api_url])

    return (
        <>
            <h1 className="text-center ubuntu my-5 fw-bold">Ricky <span className="text-primary">&</span> Morty</h1>
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
            
            <div className="container">
                <div className="row">
                    <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} />
                    <div className="col-8">
                        <div className="row">
                            <Elements results={results} />
                        </div>
                    </div>
                </div>
            </div>

            <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
        </>
    );
}

export default App;
