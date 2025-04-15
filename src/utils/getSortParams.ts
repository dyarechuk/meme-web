import { SortField, SortOrder } from '@/types/sort';

export const getSortParams = (searchParams: URLSearchParams): [SortField, SortOrder] => {
	const sort = (searchParams.get('sort') as SortField) || 'id';
	const order = (searchParams.get('order') as SortOrder) || 'asc';
	return [sort, order];
};
