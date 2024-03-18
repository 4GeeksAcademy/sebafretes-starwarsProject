const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			favorites: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			loadSomeData: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				setStore({ characters: data.results })
				// console.log(data.results);
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: async () => {
				const store = getStore();
				// const id = store.characters.uid;
				console.log(store.characters);
				// const res = await fetch(`https://www.swapi.tech/api/people/${id}`)
				console.log('favoritee');
			}
		}
	};
};

export default getState;
