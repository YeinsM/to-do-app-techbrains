// components/Card.tsx
import { Checkbox } from "flowbite-react";
import React from "react";

interface CardProps {
	title: React.ReactNode; // Accept any valid JSX content;
	description: string;
	aditionalProp?: string;
	onCheckboxChange?: () => void;
	isChecked: boolean;
	onEdit?: () => void;
	onDelete?: () => void;
}

const Card: React.FC<CardProps> = ({
	title,
	description,
	aditionalProp,
	onCheckboxChange,
	isChecked,
	onEdit,
	onDelete,
}) => {
	return (
		<div className="w-full flex min-w-0 border border-gray-200 rounded-lg shadow dark:bg-gray-800 p-4 dark:bg-gray-800 dark:border-gray-700 justify-between">
			<div>
				<div>
					<h5 className="text-xl mb-2 font-bold leading-none text-gray-900 dark:text-white">
						{title}
					</h5>
				</div>
				<div>
					<p className="text-sm mb-2 font-medium truncate text-gray-900 dark:text-white">
						{description}
					</p>
				</div>
				<div className="flex items-center">
					<Checkbox
						id="default-checkbox"
						checked={isChecked}
						onChange={onCheckboxChange}
						className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label
						htmlFor="default-checkbox"
						className={`ml-2 text-sm font-medium ${
							isChecked ? "line-through" : ""
						} text-gray-900 dark:text-gray-300`}>
						{aditionalProp}
					</label>
				</div>
			</div>
			<div className="flex flex-col items-end">
				<button
					onClick={onDelete}
					type="button"
					className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br
                    focus:ring-4 focus:outline-none focus:ring-red-300
                    dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2 text-center me-2 mb-2">
					<svg
						className="w-6 h-6 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Card;
