import React from 'react';
import { Status } from '../../interfaces/Status';
import StatusHelper from '../../helpers/StatusHelper';
import styles from './ControlRow.module.scss';

interface ControlRowProps {
	name: string;
	deviation: number | string;
	deviationOutTotal: number | string;
	status?: Status;
}

const ControlRow: React.FC<ControlRowProps> = ({ name, deviation, deviationOutTotal, status }) => {
	const getStatusIcon = (currentStatus: Status): JSX.Element => {
		const statusValue = StatusHelper.getStatusValues(currentStatus);

		return <statusValue.icon style={{ color: statusValue.color }} />;
	};

	return (
		<div className={styles.row}>
			<span>{name}</span>
			<span>{deviation}</span>
			<span>{deviationOutTotal}</span>
			<span>
				{
					status && getStatusIcon(status)
				}
			</span>
		</div>
	);
};

export default ControlRow;
