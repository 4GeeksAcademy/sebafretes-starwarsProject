import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom"
import "../../styles/home.css";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadSomeData();
	}, []);


	const characters = store.characters.map((char) => {
		return (
			<div key={char.uid} className="card col-3">
				<img src={`https://starwars-visualguide.com/assets/img/characters/${char.uid}.jpg`} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title" style={{ textAlign: 'start' }}>{char.name}</h5>
					<p className="card-text" style={{ textAlign: 'start' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<div className="d-flex justify-content-between">
						<Link to={`/single/:${char.uid}`} className="btn btn-primary">Learn more</Link>
						<button
							className="rounded-1"
							style={{ borderColor: '#E8DD2D', background: 'white', fontSize: '1.5rem' }}
							onClick={() => { actions.addFavorite() }}>
							<ion-icon name="heart-outline" style={{ color: '#E8DD2D' }}></ion-icon>
						</button>
					</div>
				</div>
			</div>
		)
	});

	return (
		<>
			<div className="text-center mt-5">
				<h1>StarWars</h1>
				<div className="d-flex justify-content-center overflow-scroll mx-auto" style={{ maxWidth: '90vw' }}>
					{characters}
				</div>
			</div>
		</>
	)
};
