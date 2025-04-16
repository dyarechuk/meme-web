import { SortField } from '@/types/sort';
import { TableColumnProps } from '@heroui/react';

export const columns: {
	key: SortField | 'image' | 'actions';
	label: string;
	sortable?: boolean;
	width: TableColumnProps<[]>['width'];
}[] = [
	{ key: 'id', label: 'ID', sortable: true, width: '70' },
	{ key: 'name', label: 'Name', sortable: true, width: '200' },
	{ key: 'likes', label: 'Likes', sortable: true, width: '100' },
	{ key: 'image', label: 'Image', width: '300' },
	{ key: 'actions', label: 'Actions', width: '100' },
];
