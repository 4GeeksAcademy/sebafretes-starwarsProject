import React from "react";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar d-flex justify-content-around navbar-light bg-light mb-3">
			<Link to="/">
				<img style={{ width: "5rem" }} src="https://w7.pngwing.com/pngs/723/1016/png-transparent-star-wars-logo-star-wars-text-logo-silhouette.png" />
			</Link>
			<div className="dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites <span style={{ backgroundColor: 'grey', paddingLeft: '0.2rem', paddingRight: '0.2rem', fontWeight: '500' }}>{store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favorites.length < 1 && <li className="dropdown-item">No Favorites</li>}
					{store.favorites.map((item) => {
						return (
							<li className="d-flex justify-content-center" key={item.uid}>
								<div className="dropdown-item">{item.name}</div>
								<button type="button" className="btn" style={{ background: "none" }} onClick={() => { actions.deleteFavorite(item.uid) }}>
									<ion-icon name="trash-outline"></ion-icon>
								</button>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	);
};
