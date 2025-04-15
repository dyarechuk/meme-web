import { MemeList } from '@/components/MemeList';
import { BlurIn } from '@/ui/BlurIn';

export const ListPage = () => {
	return (
		<section className="w-full px-4 flex flex-col gap-6">
			<BlurIn>Meme List</BlurIn>
			<MemeList />
		</section>
	);
};
