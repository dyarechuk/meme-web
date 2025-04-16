import { useSearchParams } from 'react-router';

import { SortField, SortOrder } from '@/types/sort';

export const useSortParams = (): [
	SortField | null,
	SortOrder | null,
	(field: SortField) => void,
] => {
	const [params, setParams] = useSearchParams();

	const sort = (params.get('sort') as SortField) || null;
	const order = (params.get('order') as SortOrder) || null;

	const updateSort = (field: SortField) => {
		const next = new URLSearchParams(params);

		if (sort !== field) {
			next.set('sort', field);
			next.set('order', 'asc');
		} else if (order === 'asc') {
			next.set('order', 'desc');
		} else {
			next.delete('sort');
			next.delete('order');
		}

		setParams(next);
	};

	return [sort, order, updateSort];
};
