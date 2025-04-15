import { useQuery } from '@tanstack/react-query';

import { getMemes } from '@/api/memes';
import { SortField, SortOrder } from '@/types/sort';

export const useMemes = (sortBy?: SortField, sortOrder?: SortOrder) => {
	return useQuery({
		queryKey: ['memes', sortBy, sortOrder],
		queryFn: () => getMemes(sortBy, sortOrder),
	});
};
