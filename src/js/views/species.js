import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Species = () => {
    const [specie, setSpecie] = useState(null);
    const { id } = useParams();

    const fetchEverySpecie = async () => {
        const res = await fetch(`https://www.swapi.tech/api/species/${id}`)
        const data = await res.json()
        setSpecie(data.result);
        console.log(data);
    }

    useEffect(() => {
        fetchEverySpecie();
    }, [])


    return (
        <div className="container-fluid vh-auto d-flex align-items-center justify-content-center">
            <div className="col">
                <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} className="card-img-top" alt="..." />
            </div>
            <div className="col">
                {
                    specie &&
                    <div className="text-center">
                        <h5 className="card-title text-center" style={{ textAlign: 'start' }}>{specie.properties.name}</h5>
                        <p className="card-text text-center" style={{ textAlign: 'start' }}>{specie.properties.designation}</p>
                    </div>
                }
            </div>
        </div>
    );
};