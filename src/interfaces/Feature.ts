import { Control } from './Control';
import { Status } from './Status';

export interface Feature {
	name: string;
	controls: Control[];
	status: Status;
}
