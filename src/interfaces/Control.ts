import { Status } from './Status';

export interface Control {
	name: string;
	deviation: number;
	deviationOutTotal: number;
	status: Status;
}
