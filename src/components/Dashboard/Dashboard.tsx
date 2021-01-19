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
				<h3>{name}</h3>
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
