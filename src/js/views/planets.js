import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Planets = () => {
	const [planet, setPlanet] = useState(null);
	const { id } = useParams();

	const fetchEveryPlanet = async () => {
		const res = await fetch(`https://www.swapi.tech/api/planets/${id}`)
		const data = await res.json()
		setPlanet(data.result);
		console.log(data);
	}

	useEffect(() => {
		fetchEveryPlanet();
	}, [])


	return (
		<div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
			<div className="col text-center">
				<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top img-fluid" alt="..." style={{ maxWidth: '50%', height: 'auto' }} />
			</div>
			<div className="col">
				{
					planet &&
					<div className="text-center">
						<h5 className="card-title text-center" style={{ textAlign: 'start' }}>{planet.properties.name}</h5>
						<p className="card-text text-center" style={{ textAlign: 'start' }}>{planet.properties.terrain}</p>
					</div>
				}
			</div>
		</div>
	);
};
