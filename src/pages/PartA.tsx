import Dashboard from '../components/Dashboard';
import FeatureGrid from '../components/FeatureGrid';
import { PartsContext } from '../contexts/PartsContext';
import React from 'react';
import Row from '../components/Row';

const PartA: React.FC = () => {
	const { partA, isFetching } = React.useContext(PartsContext);
	const waitingMessage = 'Waiting for data...';

	return (
		<Dashboard name={partA?.name || waitingMessage} isLoading={isFetching}>
			<Row>
				<FeatureGrid colSpan={2} feature={partA?.features[0]} />
				<FeatureGrid colSpan={1}>
					<Row>
						<FeatureGrid colSpan={1} feature={partA?.features[1]} />
					</Row>
					<Row>
						<FeatureGrid colSpan={1} feature={partA?.features[2]} />
					</Row>
				</FeatureGrid>
				<FeatureGrid colSpan={1}>
					<Row>
						<FeatureGrid colSpan={1} feature={partA?.features[3]} />
					</Row>
					<Row>
						<FeatureGrid colSpan={1} feature={partA?.features[4]} />
					</Row>
				</FeatureGrid>
				<FeatureGrid colSpan={1} feature={partA?.features[5]} />
			</Row>
		</Dashboard>
	);
};

export default PartA;
