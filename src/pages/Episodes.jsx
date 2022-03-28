import React, { useEffect, useState } from "react";
import { Elements } from "../components/elements/Elements.jsx";
import { InputGroup } from "../components/filters/categories/InputGroup.jsx";

export const Episodes = () => {

    const [ episode, setEpisode ] = useState(1);
    const [ info, setInfo ] = useState([]);
    const [ results, setResults] = useState([]);
    const [ episodesCount, setEpisodesCount ] = useState();
    let { air_date, name } = info;

    let episodes_count_url = `https://rickandmortyapi.com/api/episode`;
    let episodes_url = `https://rickandmortyapi.com/api/episode/${episode}`;

    console.log(episodesCount);

    useEffect(() => {
        (async function() {
            let data = await fetch(episodes_url).then(response => response.json());
            setInfo(data);
            let characters = await Promise.all(data.characters.map(async (element) => {
                const response = await fetch(element);
                return await response.json();
            }));
            setResults(characters);
        })()
    }, [episodes_url]);

    useEffect(() => {
        (async function() {
            let count = await fetch(episodes_count_url).then(response => response.json());
            setEpisodesCount(count.info.count);
        })()
    }, [episodes_count_url]);

    return ( 
        <div className="container">
            <div className="row mb-4">
                <h1 className="text-center mb-4">Episode: <span className="text-primary">{name === "" ? "Unknown" : name}</span>.</h1>
                <h5 className="text-center">Air date: {air_date === "" ? "Unknown" : air_date}.</h5>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4 className="text-center mb-4">Pick an episode:</h4>
                    <InputGroup setEpisode={setEpisode} name={name} count={episodesCount} />
                </div>
                <div className="col-8">
                    <div className="row">
                        <Elements results={results} />
                    </div>
                </div>
            </div>
        </div>
    );
}