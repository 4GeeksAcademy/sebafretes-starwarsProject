const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			favorites: [],
			planets: [],
			species: [],
			prueba: []
		},
		actions: {
			getCharacters: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				setStore({ characters: data.results })
				// console.log(data.results);
			},

			getPlanets: async () => {
				const res = await fetch("https://www.swapi.tech/api/planets/")
				const data = await res.json()
				setStore({ planets: data.results })
				// console.log(data);
			},

			getSpecies: async () => {
				const res = await fetch("https://www.swapi.tech/api/species/")
				const data = await res.json()
				setStore({ species: data.results })
				// console.log(data.results);
			},

			addFavorite: async (index) => {
				const store = getStore();
				// console.log(index);
				const fav = store.characters.find((char) => {
					return char.uid === index
				})
				const ifFavoriteAlreadyExists = store.favorites.find((favList) => {
					return fav === favList;
				})
				if (!ifFavoriteAlreadyExists) {
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
