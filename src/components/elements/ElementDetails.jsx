import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ElementDetails = () => {
    let { id } = useParams();

    const [ character, setCharacter ] = useState([]); 
    let { name, gender, origin, species, status, location, image, type } = character;

    let character_url = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function() {
            let data = await fetch(character_url).then(response => response.json());
            setCharacter(data);
        })();
    }, [character_url]);

    return (
        <div className="container d-flex justify-content-center flex-column align-items-center">
            <h1 className="text-center">{name}</h1>
            <div className="d-flex flex-column gap-2" style={{border: "2px solid black", borderRadius: "10px", maxWidth: "450px"}}>
                
                <img src={image} style={{borderRadius: "10px 10px 0 0"}} className="img-fluid" alt="" />
                <div style={{padding: "10px"}}>
                    {(() => {
                        if(status === "Dead"){
                            return (
                                <div style={{width: "100%", marginBottom: "10px"}} className="badge bg-danger fs-5">
                                    {status}
                                </div>
                            );
                        } else if(status === "Alive") {
                            return (
                                <div style={{width: "100%", marginBottom: "10px"}} className="badge bg-success fs-5">
                                    {status}
                                </div>
                            );
                        } else {
                            return (
                                <div style={{width: "100%", marginBottom: "10px"}} className="badge bg-secondary fs-5">
                                    {status}
                                </div>
                            );
                        }
                    })()}
                    <div className="content">
                        <div style={{width: "100%", marginBottom: "5px"}}>
                            <div>Gender: <span className="fw-bold">{gender}</span>.</div>
                        </div>
                        <div style={{width: "100%", marginBottom: "5px"}}>
                            <div>Species: <span className="fw-bold">{species}</span>.</div>
                        </div>
                        <div style={{width: "100%", marginBottom: "5px"}}>
                            <div>Type: <span className="fw-bold">{type === "" ? "Unknown" : type}</span>.</div>
                        </div>
                        <div style={{width: "100%", marginBottom: "5px"}}>
                            <div>Location: <span className="fw-bold">{location?.name}</span>.</div>
                        </div>
                        <div style={{width: "100%", marginBottom: "5px"}}>
                            <div>Origin: <span className="fw-bold">{origin?.name}</span>.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}