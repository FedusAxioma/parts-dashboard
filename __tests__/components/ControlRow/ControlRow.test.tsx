import { AiFillWarning } from 'react-icons/ai';
import ControlRow from '../../../src/components/ControlRow';
import { createRenderer } from 'react-test-renderer/shallow';
import React from 'react';
import StatusHelper from '../../../src/helpers/StatusHelper';

describe('ControlRow', () => {
	const shallow = createRenderer();

	test('renders component with all mandatory fields', () => {
		shallow.render(<ControlRow name="test" deviation={10} deviationOutTotal={20} />);

		expect(shallow.getRenderOutput()).toMatchSnapshot();
	});

	test('renders component with all fields', () => {
		StatusHelper.getStatusValues = jest.fn().mockReturnValue({
			color: 'blue',
			icon: AiFillWarning,
		});
		shallow.render(<ControlRow name="test" deviation={10} deviationOutTotal={20} status={'WARNING'} />);

		expect(shallow.getRenderOutput()).toMatchSnapshot();
	});
});
