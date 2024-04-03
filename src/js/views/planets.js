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
		<>
			<div className="container">
				<div className="container-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
					<div className="col text-center">
						<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top img-fluid" alt="..." style={{ maxWidth: '50%', height: 'auto' }} />
					</div>
					<div className="col">
						{
							planet &&
							<div className="text-center">
								<h5 className="card-title text-center" style={{ textAlign: 'start' }}>{planet.properties.name}</h5>
								<p className="card-text text-center" style={{ textAlign: 'start' }}>{planet.description}</p>
							</div>
						}
					</div>
				</div>
				<hr style={{ color: 'red' }} ></hr>
				<div className="d-flex justify-content-center text-center">
					{
						planet &&
						<>
							<div style={{ color: '#E20B49', fontWeight: '600', marginRight: '2rem' }}>Name
								<p style={{ color: '#E20B49', fontWeight: '400' }}>{planet.properties.name}</p>
							</div>
							<div style={{ color: '#E20B49', fontWeight: '600', marginRight: '2rem' }}>Climate
								<p style={{ color: '#E20B49', fontWeight: '400' }}>{planet.properties.climate}</p>
							</div>
							<div style={{ color: '#E20B49', fontWeight: '600', marginRight: '2rem' }}>Population
								<p style={{ color: '#E20B49', fontWeight: '400' }}>{planet.properties.population}</p>
							</div>
							<div style={{ color: '#E20B49', fontWeight: '600', marginRight: '2rem' }}>Orbital Period
								<p style={{ color: '#E20B49', fontWeight: '400' }}>{planet.properties.orbital_period}</p>
							</div>
							<div style={{ color: '#E20B49', fontWeight: '600', marginRight: '2rem' }}>Rotation Period
								<p style={{ color: '#E20B49', fontWeight: '400' }}>{planet.properties.rotation_period}</p>
							</div>
							<div style={{ color: '#E20B49', fontWeight: '600', marginRight: '2rem' }}>Diameter
								<p style={{ color: '#E20B49', fontWeight: '400' }}>{planet.properties.diameter}</p>
							</div>
						</>
					}
				</div>
			</div>
		</>
	);
};
