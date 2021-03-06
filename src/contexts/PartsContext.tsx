import React, { ReactNode } from 'react';
import { Part } from '../interfaces/Part';
import PartsService from '../services/PartsService';

export interface PartsProviderStore {
	partA: Part | undefined;
	isFetching: boolean;
}

export const PartsContext = React.createContext({} as PartsProviderStore);
export const PartsUpdateContext = React.createContext({});

const PartsProvider = ({ children }: { children: ReactNode }): JSX.Element => {
	const [partA, setPartA] = React.useState<Part | undefined>(undefined);
	const [isFetching, setIsFetching] = React.useState(false);

	const fetchPartA = async (): Promise<void> => {
		setIsFetching(true);

		try {
			const part = await PartsService.getPartA();

			setPartA(part);
		} catch (err) {
			Promise.reject(err.message);
		}

		setIsFetching(false);
		Promise.resolve();
	};

	React.useEffect(() => {
		fetchPartA();

		// Added as a poll mechanism. Instead we can use WebSockets
		const id = setInterval(() => {
			fetchPartA();
		}, 10000);

		return (): void => clearInterval(id);
	}, []);

	const store: PartsProviderStore = {
		partA,
		isFetching,
	};

	// In this case having two wrappers, one for values store and another for update is overkilled
	// but I wanted to show the idea behind it. Usually this will prevent unnecessary renders on
	// componentes that only have an update function, like setters
	return (
		<PartsContext.Provider value={store}>
			<PartsUpdateContext.Provider value={{}}>
				{children}
			</PartsUpdateContext.Provider>
		</PartsContext.Provider>
	);
};

export { PartsProvider };
export const PartsConsumer = PartsContext.Consumer;
