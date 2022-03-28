import React, { useEffect, useState } from "react";
import { Filters } from "./components/filters/Filters.jsx";
import { Elements } from "./components/elements/Elements.jsx";
import { Pagination } from "./components/pagination/Pagination.jsx";
import { Search } from "./components/search/Search.jsx";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Episodes } from "./pages/Episodes.jsx";
import { Location } from "./pages/Location.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/episodes" element={<Episodes />} />
                <Route path="/location" element={<Location />} />
            </Routes>
        </Router>
    );
}

const Home = () => {

    const [ pageNumber, setPageNumber ] = useState(1);
    const [ data, setData ] = useState([]);
    const [ search, setSearch ] = useState("");
    const [ status, setStatus ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ species, setSpecies ] = useState("");
    let { info, results } = data;

    let home_url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        (async function() {
            let data = await fetch(home_url).then((response) => response.json());
            setData(data);
        })();
    }, [home_url])

    return (
        <>
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
