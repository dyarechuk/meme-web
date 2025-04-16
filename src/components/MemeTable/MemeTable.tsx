import { useState } from 'react';
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@heroui/react';

import { useMemes } from '@/hooks/useMemes';
import { useUpdateMeme } from '@/hooks/useUpdateMeme';
import { useSortParams } from '@/hooks/useSortParams';

import { notifyError, notifySuccess } from '@/utils/toastMessage';

import { columns } from '@/config/memeTableColumns';
import { Meme } from '@/types/meme';
import { SortField } from '@/types/sort';

import { TableSkeleton } from '@/components/MemeTable/TableSkeleton';
import { EditModal } from '@/components/MemeTable/EditModal';
import { SortIcon } from '@/components/MemeTable/SortIcon';

export const MemeTable = () => {
	const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

	const [sortBy, sortOrder, handleSort] = useSortParams();
	const { data: memes = [], isLoading } = useMemes(sortBy, sortOrder);
	const updateMutation = useUpdateMeme();

	const handleUpdate = (updated: Meme) => {
		updateMutation.mutate(
			{ id: updated.id, data: updated },
			{
				onSuccess: () => notifySuccess(updated.name),
				onError: () => notifyError(),
				onSettled: () => setSelectedMeme(null),
			}
		);
	};

	return (
		<>
			<div className="w-full overflow-x-auto">
				{isLoading ? (
					<TableSkeleton />
				) : (
					<Table
						aria-label="Meme table"
						className="min-w-[700px] text-gray-800 [&_*]:bg-orange-100 [&_thead_th]:!bg-orange-400 [&_thead_th]:text-white [&_thead_th]:text-lg"
					>
						<TableHeader>
							{columns.map((col) => (
								<TableColumn
									key={col.key}
									onClick={col.sortable ? () => handleSort(col.key as SortField) : undefined}
									className={
										col.label !== 'Image' && col.label !== 'Actions' ? 'cursor-pointer' : ''
									}
								>
									{col.label}
									{col.sortable && <SortIcon active={sortBy === col.key} order={sortOrder} />}
								</TableColumn>
							))}
						</TableHeader>
						<TableBody emptyContent={'No memes found'}>
							{memes.map((meme) => (
								<TableRow key={meme.id}>
									<TableCell>{meme.id}</TableCell>
									<TableCell>{meme.name}</TableCell>
									<TableCell>{meme.likes}</TableCell>
									<TableCell>
										<a
											href={meme.image}
											className="text-orange-700 hover:text-orange-900 hover:underline transition-all duration-300 linear max-w-[400px] truncate inline-block"
											target="_blank"
											rel="noopener noreferrer"
										>
											{meme.image}
										</a>
									</TableCell>
									<TableCell>
										<Button
											aria-label={`Edit meme ${meme.id}`}
											variant="ghost"
											className="border-orange-400 hover:text-white data-[hover=true]:!bg-orange-400"
											onPress={() => setSelectedMeme(meme)}
										>
											Edit
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</div>

			{selectedMeme && (
				<EditModal
					meme={selectedMeme}
					onSave={handleUpdate}
					onClose={() => setSelectedMeme(null)}
				/>
			)}
		</>
	);
};
