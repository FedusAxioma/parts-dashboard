import { AiOutlineReload } from 'react-icons/ai';
import React from 'react';
import styles from './Dashboard.module.scss';

interface DashboardProps {
	name: string;
	isLoading: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ name, isLoading, children }) => {
	return (
		<div className={styles.container}>
			<div>
				<span className={styles.name}>{name}</span>
				{
					isLoading && (
						<AiOutlineReload />
					)
				}
			</div>
			{
				children
			}
		</div>
	);
};

export default Dashboard;
