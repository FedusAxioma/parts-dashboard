import ControlRowHeader from '../ControlRow/ControlRowHeader';
import React from 'react';

interface UseFeatureGridStore {
	colWith: string;
	colsTotal: number;
	getColHeaders: () => JSX.Element[];
}

const useFeatureGrid = (colSpan: number | undefined): UseFeatureGridStore => {
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

	return {
		colWith,
		colsTotal,
		getColHeaders,
	};
};

export default useFeatureGrid;
