import React from 'react';
import NavButton from './components/nav-button/nav-button';
import DescriptionBox from './components/description-box/description-box';

const BASE_API_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemonDetails: []
		};
		this.onPrevButtonClicked = this.onPrevButtonClicked.bind(this);
		this.onNextButtonClicked = this.onNextButtonClicked.bind(this);
	}

	componentDidMount() {
		this.fetchPokemonList(BASE_API_URL);
	}


	onPrevButtonClicked() {
		!this.state.isLoading &&this.fetchPokemonList(this.state.prev);
	}

	onNextButtonClicked() {
		!this.state.isLoading && this.fetchPokemonList(this.state.next);
	}

	render() {
		return (
			<div className="app">
				{this.state.pokemonDetails.map((pokemon, index) => <DescriptionBox
					key={`pokemon-desc-${index}`}
					title={pokemon.name}
					id={pokemon.id}
					frontImage={pokemon.sprites && pokemon.sprites.front_default}
				/>)}

				<NavButton
					nextButtonDisable={this.state.next === null}
					prevButtonDisable={this.state.prev === null}
					onNextButtonClicked={this.onNextButtonClicked}
					onPrevButtonClicked={this.onPrevButtonClicked}
				/>
			</div>
		);
	}

	fetchPokemonList(url) {
		this.setState({isLoading: true})
		fetch(url)
			.then(res => res.json())
			.then(res => {
				this.setState({prev: res.previous, next: res.next});
				return Promise.all(res.results.map(element => fetch(element.url)));
			})
			.then(response => Promise.all(response.map(element => element.json())))
			.then(pokemonDetails => this.setState({pokemonDetails, isLoading: false}));
	}
}

export default App;
