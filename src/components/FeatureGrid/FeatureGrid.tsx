import ControlRow from '../ControlRow';
import ControlRowHeader from '../ControlRow/ControlRowHeader';
import { Feature } from '../../interfaces/Feature';
import FeatureHeader from '../FeatureHeader';
import React from 'react';
import styles from './FeatureGrid.module.scss';

interface FeatureGridProps {
	colSpan?: number;
	feature?: Feature;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ colSpan, feature, children }) => {
	const colsTotal = colSpan || 1;
	const colWith = `${100 / colsTotal}%`;
	const getColHeaders = (): JSX.Element[] => {
		const colHeaders = [];

		for (let i = 0; i < colsTotal; i++) {
			colHeaders.push(
				<div style={{ width: colWith }} key={i}>
					<ControlRowHeader />
				</div>
			);
		}

		return colHeaders;
	};

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
