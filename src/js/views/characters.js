import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Characters = () => {
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
		<div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
			<div className="col text-center">
				<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top img-fluid" alt="..." style={{ maxWidth: '50%', height: 'auto' }} />
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
