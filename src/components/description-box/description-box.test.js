import DescriptionBox from "./description-box";

import React from 'react';
import {render} from '@testing-library/react';

test('renders description box', () => {
	const element = render(<DescriptionBox
		title="this is title"
		id="10"
		frontImage="someimageurl"
	/>);

	const {getByText} = element;
	expect(getByText('this is title')).toBeInTheDocument();
	expect(getByText('id: 10')).toBeInTheDocument();


});
