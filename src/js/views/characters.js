import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {
	// const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState(null);
	const { id } = useParams();

	const fetchEverySingleCharacter = async () => {
		const res = await fetch(`https://www.swapi.tech/api/people/${id}`)
		const data = await res.json()
		setCharacter(data.result);
	}

	useEffect(() => {
		fetchEverySingleCharacter();
	}, [])

	return (
		<div className="container-fluid vh-auto d-flex align-items-center justify-content-center">
			<div className="col">
				<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
			</div>
			<div className="col">
				{
					character &&
					<div className="text-center">
						<h5 className="card-title text-center" style={{ textAlign: 'start' }}>{character.properties.name}</h5>
						<p className="card-text text-center" style={{ textAlign: 'start' }}>{character.description}</p>
					</div>
				}
			</div>
		</div>
	);
};
