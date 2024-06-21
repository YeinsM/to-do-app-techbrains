// components/Card.tsx
import { Checkbox } from "flowbite-react";
import React from "react";

interface CardProps {
	title: string;
	description: string;
	aditionalProp?: string;
	onCheckboxChange?: () => void;
	isChecked: boolean;
	buttonActions?: string[];
}

const Card: React.FC<CardProps> = ({
	title,
	description,
	aditionalProp,
	onCheckboxChange,
	isChecked,
	buttonActions,
}) => {
	return (
		// <div className="flex min-w-0 border border-gray-200 rounded-lg shadow dark:bg-gray-800 sm:p-4 dark:bg-gray-800 dark:border-gray-700">
		// 	<div>
		// 		<div>2</div>
		// 		<div>3</div>
		// 	</div>
		// 	<div className="sm:flex sm:flex-col sm:items-end">4</div>
		// </div>
		<div className="flex min-w-0 border border-gray-200 rounded-lg shadow dark:bg-gray-800 sm:p-4 dark:bg-gray-800 dark:border-gray-700">
			<div className=" items-center justify-between mb-4">
				<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
					{title}
				</h5>
			</div>
			<div className="flow-root">
				<div className="items-center">
					<div className="min-w-0">
						<p className="text-sm mb-2 font-medium truncate text-gray-900 dark:text-white">
							{description}
						</p>
						<div className="items-center">
							<Checkbox
								id="default-checkbox"
								checked={isChecked}
								onChange={onCheckboxChange}
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								htmlFor="default-checkbox"
								className={`ms-2 text-sm font-medium ${
									isChecked ? "line-through" : ""
								} text-gray-900 dark:text-gray-300`}>
								{aditionalProp}
							</label>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div>03</div>
			</div>
		</div>
	);
};

export default Card;
