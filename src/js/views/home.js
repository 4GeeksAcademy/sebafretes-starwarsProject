import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom"
import "../../styles/home.css";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
	}, []);

	useEffect(() => {
		actions.getPlanets();
	}, []);

	useEffect(() => {
		actions.getSpecies();
	}, []);

	const characters = store.characters.map((char) => {
		return (
			<div key={char.uid} className="card mt-2 col-3 p-2">
				<img src={`https://starwars-visualguide.com/assets/img/characters/${char.uid}.jpg`} className="card-img-top" alt="..." />
				<div className="card-body">
					{
						char.properties &&
						<>
							<h5 className="card-title" style={{ textAlign: 'start' }}>{char.properties.name}</h5>
							<p className="card-text" style={{ textAlign: 'start', marginBottom: 0 }}>Gender: {char.properties.gender} </p>
							<p className="card-text" style={{ textAlign: 'start', marginBottom: 0 }}>Hair color: {char.properties.hair_color} </p>
							<p className="card-text" style={{ textAlign: 'start' }}>Eye-color: {char.properties.eye_color} </p>
						</>
					}
					<div className="d-flex justify-content-between">
						<Link to={`/characters/${char.uid}`} className="btn btn-primary">Learn more</Link>
						<button
							className="btn btn-warning"
							style={{ borderColor: '#E8DD2D', fontSize: '1.5rem' }}
							onClick={() => { actions.addFavorite(char.uid) }}>
							<ion-icon name="heart-outline" style={{ color: 'white' }}></ion-icon>
						</button>
					</div>
				</div>
			</div>
		)
	});

	const eachPlanet = store.planets.map((items) => {
		return (
			<div key={items.uid} className="card mt-2 col-3 p-2">
				<img src={`https://starwars-visualguide.com/assets/img/planets/${items.uid}.jpg`} className="card-img-top" alt="..." />
				<div className="card-body">
					{
						items.properties &&
						<>
							<h5 className="card-title" style={{ textAlign: 'start' }}>{items.properties.name}</h5>
							<p className="card-text" style={{ textAlign: 'start', marginBottom: 0 }}>Population: {items.properties.population} </p>
							<p className="card-text" style={{ textAlign: 'start' }}>Terrain:{items.properties.terrain} </p>
						</>
					}
					<div className="d-flex justify-content-between">
						<Link to={`/planets/${items.uid}`} className="btn btn-primary">Learn more</Link>
						{/* <button
							className="btn btn-warning"
							style={{ borderColor: '#E8DD2D', fontSize: '1.5rem' }}
							onClick={() => { actions.addFavorite(items.uid) }}>
							<ion-icon name="heart-outline" style={{ color: 'white' }}></ion-icon>
						</button> */}
					</div>
				</div>
			</div>
		)
	});

	const eachSpecies = store.species.map((elem) => {
		return (
			<div key={elem.uid} className="card mt-2 col-3 p-2">
				<img src={`https://starwars-visualguide.com/assets/img/species/${elem.uid}.jpg`} className="card-img-top" alt="..." />
				<div className="card-body">
					{
						elem.properties &&
						<>
							<h5 className="card-title" style={{ textAlign: 'start' }}>{elem.properties.name}</h5>
							<p className="card-text" style={{ textAlign: 'start', marginBottom: 0 }}>Classification: {elem.properties.classification} </p>
							<p className="card-text" style={{ textAlign: 'start' }}>Designation: {elem.properties.designation}</p>
						</>
					}
					<div className="d-flex justify-content-between">
						<Link to={`/species/${elem.uid}`} className="btn btn-primary">Learn more</Link>
						{/* <button
							className="btn btn-warning"
							style={{ borderColor: '#E8DD2D', fontSize: '1.5rem' }}
							onClick={() => { actions.addFavorite(items.uid) }}>
							<ion-icon name="heart-outline" style={{ color: 'white' }}></ion-icon>
						</button> */}
					</div>
				</div>
			</div>
		)
	})


	return (
		<>
			<div className="mt-5">
				<h1 style={{ color: 'red', marginLeft: '3rem' }}>Characters</h1>
				<div className="d-flex" style={{ overflowX: "auto", marginLeft: '3rem', marginRight: '3rem' }}>
					{characters}
				</div>

				<h1 style={{ color: 'red', marginLeft: '3rem', marginTop: '3rem' }}>Planets</h1>
				<div className="d-flex" style={{ overflowX: "auto", marginLeft: '3rem', marginRight: '3rem' }}>
					{eachPlanet}
				</div>


				<h1 style={{ color: 'red', marginLeft: '3rem', marginTop: '3rem' }}>Species</h1>
				<div className="d-flex" style={{ overflowX: "auto", marginLeft: '3rem', marginRight: '3rem' }}>
					{eachSpecies}
				</div>
			</div>
		</>
	)
};
