import React from 'react';
import { Status } from '../../interfaces/Status';
import StatusHelper from '../../helpers/StatusHelper';
import styles from './FeatureHeader.module.scss';

interface FeatureHeaderProps {
	title: string;
	status: Status;
}

const FeatureHeader: React.FC<FeatureHeaderProps> = ({ title, status }) => {
	const statusValue = StatusHelper.getStatusValues(status);

	return (
		<div className={styles.featureHeader} style={{ backgroundColor: statusValue.color }}>
			<span>{title}</span>
			<statusValue.icon className={styles.icon} />
		</div>
	);
};

export default React.memo(FeatureHeader);
