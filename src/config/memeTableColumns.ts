import { SortField } from '@/types/sort';

export const columns: {
	key: SortField | 'image' | 'actions';
	label: string;
	sortable?: boolean;
}[] = [
	{ key: 'id', label: 'ID', sortable: true },
	{ key: 'name', label: 'Name', sortable: true },
	{ key: 'likes', label: 'Likes', sortable: true },
	{ key: 'image', label: 'Image' },
	{ key: 'actions', label: 'Actions' },
];
