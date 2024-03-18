import React from "react";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar d-flex justify-content-around navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites <span>{store.favorites.length > 0 ? store.favorites.length : ''}</span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favorites.length < 1 && <li className="dropdown-item">No Favorites</li>}
					{store.favorites.map((item) => {
						return (
							<li className="d-flex justify-content-center" key={item.uid}>
								<div className="dropdown-item">{item.name}</div>
								<div className="dropdown-item" onClick={() => { actions.deleteFavorite(item.uid) }}>
									<ion-icon name="trash-outline"></ion-icon>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	);
};
