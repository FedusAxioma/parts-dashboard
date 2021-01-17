import App from '../src/App';
import { createRenderer } from 'react-test-renderer/shallow';
import React from 'react';

describe('App', () => {
	const shallow = createRenderer();

	test('renders base setup', () => {
		shallow.render(<App />);

		expect(shallow.getRenderOutput()).toMatchSnapshot();
	});
});
