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
	const { colWith, colsTotal, controlsContainerRef, controlsLimit, getColHeaders } = useFeatureGrid(colSpan);

	return (
		<div className={styles.featureGrid} style={{ flex: colsTotal }}>
			{
				children || (
					<div className={styles.featureContainer}>
						<FeatureHeader title={feature?.name || ''} status={feature?.status || 'ERROR'} />
						<div className={styles.controlsContainer}>
							<div className={styles.controlsHeaders}>
								{
									getColHeaders()
								}
							</div>
							<div className={styles.controlsValuesContainer} ref={controlsContainerRef}>
								<div className={styles.controlsValues}>
									{
										feature?.controls.slice(0, controlsLimit * colsTotal).map(control => (
											<div style={{ width: colWith }} key={control.id}>
												<ControlRow name={control.name} deviation={control.deviation} deviationOutTotal={control.deviationOutTotal} status={control.status} />
											</div>
										))
									}
								</div>
							</div>
						</div>
					</div>
				)
			}
		</div>
	);
};

export default FeatureGrid;
