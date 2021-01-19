import { IconType } from 'react-icons/lib';

export type Status = 'GOOD' | 'WARNING' | 'ERROR';

export interface StatusValue {
	color: string;
	icon: IconType;
}
