import ControlRow from '../ControlRow';
import { Feature } from '../../interfaces/Feature';
import FeatureHeader from '../FeatureHeader';
import React from 'react';
import styles from './FeatureGrid.module.scss';
import useFeatureGrid from './UseFeatureGrid';

interface FeatureGridProps {
	colSpan?: number;
	feature?: Feature;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ colSpan, feature, children }) => {
	const { colWith, colsTotal, getColHeaders } = useFeatureGrid(colSpan);

	return (
		<div className={styles.featureGrid} style={{ flex: colsTotal }}>
			{
				children || (
					<React.Fragment>
						<FeatureHeader title={feature?.name || ''} status={feature?.status || 'ERROR'} />
						<div className={styles.controlsContainer}>
							<div style={{ width: '100%', flexDirection: 'row', display: 'flex' }}>
								{
									getColHeaders()
								}
							</div>
							{
								feature?.controls.map(control => (
									<div style={{ width: colWith }} key={control.id}>
										<ControlRow name={control.name} deviation={control.deviation} deviationOutTotal={control.deviationOutTotal} status={control.status} />
									</div>
								))
							}
						</div>
					</React.Fragment>
				)
			}
		</div>
	);
};

export default FeatureGrid;
