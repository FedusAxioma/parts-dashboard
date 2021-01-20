import { Control } from './Control';
import { Status } from './Status';

export interface Feature {
	id: string;
	name: string;
	controls: Control[];
	status: Status;
}
