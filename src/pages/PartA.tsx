import Dashboard from '../components/Dashboard';
import FeatureGrid from '../components/FeatureGrid';
import { PartsContext } from '../contexts/PartsContext';
import React from 'react';
import styles from './Part.module.scss';

const PartA: React.FC = () => {
	const { partA, isFetching } = React.useContext(PartsContext);
	const partName = partA?.name || 'Waiting for Part A';

	return (
		<Dashboard name={partName} isLoading={isFetching}>
			<div className={styles.featuresGridContainer}>
				<FeatureGrid colSpan={2} feature={partA?.features[0]} />
				<FeatureGrid colSpan={1}>
					<div className={styles.featuresGridContainer}>
						<FeatureGrid colSpan={1} feature={partA?.features[1]} />
					</div>
					<div className={styles.featuresGridContainer}>
						<FeatureGrid colSpan={1} feature={partA?.features[2]} />
					</div>
				</FeatureGrid>
				<FeatureGrid colSpan={1}>
					<div className={styles.featuresGridContainer}>
						<FeatureGrid colSpan={1} feature={partA?.features[3]} />
					</div>
					<div className={styles.featuresGridContainer}>
						<FeatureGrid colSpan={1} feature={partA?.features[4]} />
					</div>
				</FeatureGrid>
				<FeatureGrid colSpan={1} feature={partA?.features[5]} />
			</div>
		</Dashboard>
	);
};

export default PartA;
