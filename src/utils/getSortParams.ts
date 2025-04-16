import { SortField, SortOrder } from '@/types/sort';

export const getSortParams = (
	searchParams: URLSearchParams
): [SortField | null, SortOrder | null] => {
	const sort = (searchParams.get('sort') as SortField) || null;
	const order = (searchParams.get('order') as SortOrder) || null;
	return [sort, order];
};
