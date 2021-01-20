import { createRenderer } from 'react-test-renderer/shallow';
import React from 'react';
import Row from '../../../src/components/Row';

describe('Row', () => {
	const shallow = createRenderer();

	test('renders component', () => {
		shallow.render(<Row><span>Test</span></Row>);

		expect(shallow.getRenderOutput()).toMatchSnapshot();
	});
});
