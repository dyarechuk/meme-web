import { useSearchParams } from 'react-router';

import { SortField, SortOrder } from '@/types/sort';

export const useSortParams = (): [SortField, SortOrder, (field: SortField) => void] => {
	const [params, setParams] = useSearchParams();

	const sort = (params.get('sort') as SortField) || 'id';
	const order = (params.get('order') as SortOrder) || 'asc';

	const updateSort = (field: SortField) => {
		const newOrder = sort === field && order === 'asc' ? 'desc' : 'asc';
		const next = new URLSearchParams(params);
		next.set('sort', field);
		next.set('order', newOrder);
		setParams(next);
	};

	return [sort, order, updateSort];
};
