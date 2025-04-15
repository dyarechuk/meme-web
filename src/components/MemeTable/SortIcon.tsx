import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export const SortIcon = ({ active, order }: { active: boolean; order: 'asc' | 'desc' }) => {
	if (!active) return null;

	return order === 'asc' ? (
		<ChevronUpIcon className="w-4 h-4 !bg-orange-400 inline-block ml-1" />
	) : (
		<ChevronDownIcon className="w-4 h-4 !bg-orange-400 inline-block ml-1" />
	);
};
