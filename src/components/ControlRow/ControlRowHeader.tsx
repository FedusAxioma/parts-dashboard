import ControlRow from './ControlRow';
import React from 'react';
import styles from './ControlRowHeader.module.scss';

const ControlRowHeader: React.FC = () => {
	return (
		<div className={styles.header}>
			<ControlRow name={'Control'} deviation={'Dev'} deviationOutTotal={'Dev Out Tol'} />
		</div>
	);
};

export default ControlRowHeader;
