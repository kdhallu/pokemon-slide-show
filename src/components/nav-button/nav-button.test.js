import React from 'react';

import NavButton from "./nav-button";

import {render} from '@testing-library/react';

test('renders nav button', () => {
	const mockPrevButton = jest.fn();
	const mockNextButton = jest.fn();

	const element = render(<NavButton
		onPrevButtonClicked={mockPrevButton}
		onNextButtonClicked={mockNextButton}
	/>);

	element.container.querySelectorAll('input')[0].click();
	expect(mockPrevButton).toHaveBeenCalled();

	element.container.querySelectorAll('input')[1].click();
	expect(mockNextButton).toHaveBeenCalled();

});
