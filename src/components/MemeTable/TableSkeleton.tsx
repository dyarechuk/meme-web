import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';

export const TableSkeleton = () => {
	const rows = Array.from({ length: 10 });

	return (
		<div className="relative">
			<p className="text-center text-slate-900 py-4 font-medium absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] z-10">
				Loading memes...
			</p>

			<Table
				aria-label="Loading meme table"
				className="min-w-[700px] text-gray-800 [&_*]:bg-white [&_thead_th]:!bg-orange-400 [&_thead_th]:text-white [&_thead_th]:text-lg animate-pulse"
			>
				<TableHeader>
					<TableColumn width={'62'}>ID</TableColumn>
					<TableColumn width={'177'}>Name</TableColumn>
					<TableColumn width={'88'}>Likes</TableColumn>
					<TableColumn width={'374'}>Image</TableColumn>
					<TableColumn width={'92.5'}>Actions</TableColumn>
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
