import { Feature } from './Feature';

export interface Part {
	id: string;
	name: string;
	features: Feature[];
}
