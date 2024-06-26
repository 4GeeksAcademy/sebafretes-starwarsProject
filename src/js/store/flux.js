const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			favorites: [],
			planets: [],
			species: [],
			singleSpecie: [],
		},
		actions: {
			getCharacters: async () => {
				const store = getStore();
				try {
					const res = await fetch("https://swapi.tech/api/people")
					const data = await res.json()
					for (let char of data.results) {
						const charRes = await fetch(`https://swapi.tech/api/people/${char.uid}`)
						const charData = await charRes.json()
						setStore({ characters: [...store.characters, charData.result] })
					}
				}
				catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				const store = getStore();
				const res = await fetch("https://www.swapi.tech/api/planets/")
				const data = await res.json()
				for (let item of data.results) {
					const itemRes = await fetch(`https://swapi.tech/api/planets/${item.uid}`)
					const itemData = await itemRes.json()
					setStore({ planets: [...store.planets, itemData.result] })
				}
				// setStore({ planets: data.results })
			},

			getSpecies: async () => {
				const store = getStore();
				const res = await fetch("https://www.swapi.tech/api/species/")
				const data = await res.json()
				for (let item of data.results) {
					const itemRes = await fetch(`https://swapi.tech/api/species/${item.uid}`)
					const itemData = await itemRes.json()
					setStore({ species: [...store.species, itemData.result] })
				}
				// setStore({ species: data.results })
				// console.log(data.results);
			},

			fetchEverySpecie: async (id) => {
				const res = await fetch(`https://www.swapi.tech/api/species/${id}`)
				const data = await res.json()
				setStore({ singleSpecie: data.result });
				// console.log(data);
			},

			addFavorite: async (fav) => {
				const store = getStore();

				const ifFavoriteAlreadyExists = store.favorites.some((item) => fav._id == item._id);

				if (ifFavoriteAlreadyExists) {
					let newFav = store.favorites.filter((item) => fav._id != item._id)
					setStore({ favorites: newFav });
				}
				else {
					setStore({ favorites: [...store.favorites, fav] });
				}
			},

			deleteFavorite: (index) => {
				const store = getStore();
				const itemFav = store.favorites.filter((char) => {
					return char.uid !== index
				})
				setStore({ favorites: itemFav })
			}
		}
	};
};

export default getState;
