import { Card } from '@heroui/card';
import { Image } from '@heroui/image';

import { Meme } from '@/types/meme';

interface MemeCardProps {
	meme: Meme;
}

export const MemeCard = ({ meme }: MemeCardProps) => (
	<Card className="p-4 flex flex-col items-start bg-orange-100 shadow-md">
		<div className="w-full flex justify-center mb-4">
			<Image src={meme.image} alt={meme.name} className="h-48 object-cover rounded-md" />
		</div>
		<h3 className="text-lg font-semibold">{meme.name}</h3>
		<p className="text-sm text-gray-800">
			Likes: <span className="font-bold">{meme.likes}</span>
		</p>
		<a
			href={meme.image}
			target="_blank"
			rel="noopener noreferrer"
			className="mt-2 text-orange-500 hover:text-orange-900 hover:underline transition-all duration-300 linear text-sm"
		>
			Open Image
		</a>
	</Card>
);
