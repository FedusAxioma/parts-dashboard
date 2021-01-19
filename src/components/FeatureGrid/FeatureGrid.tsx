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
	const flex = colSpan || 1;
	const colWith = `${100 / flex}%`;
	const getColHeaders = (): JSX.Element[] => {
		const colHeaders = [];

		for (let i = 0; i < flex; i++) {
			colHeaders.push(
				<div style={{ width: colWith }}>
					<ControlRowHeader />
				</div>
			);
		}

		return colHeaders;
	};

	return (
		<div className={styles.featureGrid} style={{ flex }}>
			{
				children || (
					<React.Fragment>
						<FeatureHeader title={feature?.name || ''} status={feature?.status || 'ERROR'} />
						<div className={styles.controlsContainer}>
							{
								getColHeaders()
							}
							{
								feature?.controls.map(control => (
									<div style={{ width: colWith }}>
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
