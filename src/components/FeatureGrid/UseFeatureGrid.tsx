import ControlRowHeader from '../ControlRow/ControlRowHeader';
import React from 'react';

interface UseFeatureGridStore {
	colWith: string;
	colsTotal: number;
	controlsContainerRef: React.MutableRefObject<HTMLDivElement | null>;
	controlsLimit: number;
	getColHeaders: () => JSX.Element[];
}

const useFeatureGrid = (colSpan: number | undefined): UseFeatureGridStore => {
	const controlsContainerRef = React.useRef<HTMLDivElement | null>(null);
	const [controlsLimit, setControlsLimit] = React.useState(0);
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

	React.useEffect(() => {
		if (controlsContainerRef) {
			const handleResize = (): void => {
				// Divide controls container height on controls height to determine controls limit to show
				setControlsLimit((controlsContainerRef.current?.clientHeight || 0) / 40);
			};

			handleResize();

			window.addEventListener('resize', handleResize);

			return (): void => window.removeEventListener('resize', handleResize);
		}
	}, [controlsContainerRef]);

	return {
		colWith,
		colsTotal,
		controlsContainerRef,
		controlsLimit,
		getColHeaders,
	};
};

export default useFeatureGrid;
