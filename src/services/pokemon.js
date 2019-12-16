export function fetchPokemonList(url) {
	return fetch(url).then(res => res.json())
}

