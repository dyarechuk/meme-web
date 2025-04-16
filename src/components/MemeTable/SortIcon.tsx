import { ChevronUpIcon } from '@heroicons/react/24/outline';

export const SortIcon = ({ active, order }: { active: boolean; order: 'asc' | 'desc' }) => {
	if (!active) return null;

	return (
		<ChevronUpIcon
			className={`
        w-4 h-4 inline-block !bg-orange-400 mb-[1px] ml-1 text-white
        transition-transform duration-300
        ${order === 'desc' ? 'rotate-180' : ''}
      `}
		/>
	);
};
