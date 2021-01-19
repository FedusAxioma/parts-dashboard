import PartA from './pages/PartA';
import { PartsProvider } from './contexts/PartsContext';
import React from 'react';

const App: React.FC = () => {
	return (
		<PartsProvider>
			<PartA />
		</PartsProvider>
	);
};

export default App;
