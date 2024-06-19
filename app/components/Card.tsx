// components/Card.tsx
import { Checkbox } from "flowbite-react";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  aditionalProp?: string;
  onCheckboxChange?: () => void;
  isChecked: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  aditionalProp,
  onCheckboxChange,
  isChecked,
}) => {
  return (
    <div className="w-full mt-4 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700">
          <li>
            <div className="flex items-center">
              <div className="flex-1 min-w-0">
                <p className="text-sm mb-2 font-medium truncate text-gray-900 dark:text-white">
                  {description}
                </p>
                <div className="flex items-center">
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
