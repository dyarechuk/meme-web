import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';

export const TableSkeleton = () => {
	const rows = Array.from({ length: 10 });

	return (
		<div className="w-full overflow-x-auto relative">
			<p className="text-center text-slate-900 py-4 font-medium absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] z-10">
				Loading memes...
			</p>

			<Table
				aria-label="Loading meme table"
				className="min-w-[700px] text-gray-800 [&_*]:bg-gray-100 [&_thead_th]:!bg-gray-300 [&_thead_th]:text-gray-800 [&_thead_th]:text-lg animate-pulse"
			>
				<TableHeader>
					<TableColumn>ID</TableColumn>
					<TableColumn>Name</TableColumn>
					<TableColumn>Likes</TableColumn>
					<TableColumn>Image</TableColumn>
					<TableColumn>Actions</TableColumn>
				</TableHeader>

				<TableBody>
					{rows.map((_, i) => (
						<TableRow key={i}>
							{Array.from({ length: 5 }).map((_, j) => (
								<TableCell key={j}>
									<div className="h-10 bg-gray-300 rounded w-full" />
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
