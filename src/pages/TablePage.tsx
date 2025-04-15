import { MemeTable } from '@/components/MemeTable';
import { BlurIn } from '@/ui/BlurIn';

export const TablePage = () => {
	return (
		<section className="w-full px-4 flex flex-col gap-6">
			<BlurIn>Meme Table</BlurIn>
			<MemeTable />
		</section>
	);
};
