import ControlRow from './ControlRow';
import React from 'react';

const ControlRowHeader: React.FC = () => {
	return (
		<ControlRow name={'Control'} deviation={'Dev'} deviationOutTotal={'Dev Out Tol'} />
	);
};

export default ControlRowHeader;
