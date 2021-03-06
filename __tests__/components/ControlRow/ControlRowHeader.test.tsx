import ControlRowHeader from '../../../src/components/ControlRow/ControlRowHeader';
import { createRenderer } from 'react-test-renderer/shallow';
import React from 'react';

describe('ControlRowHeader', () => {
	const shallow = createRenderer();

	test('renders component', () => {
		shallow.render(<ControlRowHeader />);

		expect(shallow.getRenderOutput()).toMatchSnapshot();
	});
});
