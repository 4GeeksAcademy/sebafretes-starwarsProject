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
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="col text-center">
                <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} className="card-img-top img-fluid" alt="..." style={{ maxWidth: '50%', height: 'auto' }}/>
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