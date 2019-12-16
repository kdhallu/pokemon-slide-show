import App from './App';

import React from 'react';
import {render} from '@testing-library/react';

const mockSuccessResponse = {
	"count": 964,
	"next": "https://pokeapi.co/api/v2/pokemon/?offset=6&limit=3",
	"previous": "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3",
	"results": [
		{"name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon/4/"},
		{"name": "charmeleon", "url": "https://pokeapi.co/api/v2/pokemon/5/"},
		{"name": "charizard", "url": "https://pokeapi.co/api/v2/pokemon/6/"}
		]
};

test('Loading the app will call the fetch api', (done) => {
	const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
	const mockFetchPromise = Promise.resolve({ // 3
		json: () => mockJsonPromise,
	});
	jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4

	render(<App/>);
	expect(global.fetch).toHaveBeenCalledTimes(1);
	expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3');

	done();
});
