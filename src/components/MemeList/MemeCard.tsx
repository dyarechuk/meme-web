import { motion } from 'framer-motion';
import { Card } from '@heroui/card';
import { Image } from '@heroui/image';

import { Meme } from '@/types/meme';

interface MemeCardProps {
	meme: Meme;
}

export const MemeCard = ({ meme }: MemeCardProps) => (
	<a href={meme.image} target="_blank" rel="noopener noreferrer">
		<motion.div
			whileHover={{ y: -4, boxShadow: '8px 8px 20px rgba(255, 148, 34, 0.35)' }}
			transition={{ duration: 0.3, ease: 'easeOut' }}
			className="rounded-2xl h-full"
		>
			<Card className="p-4 h-full flex flex-col justify-between items-start bg-orange-100 shadow-md cursor-pointer">
				<div className="w-full">
					<div className="w-full flex justify-center mb-4">
						<Image src={meme.image} alt={meme.name} className="h-48 object-cover rounded-md" />
					</div>
					<h3 className="text-lg font-semibold leading-5 mb-2">{meme.name}</h3>
					<p className="text-sm text-gray-800">
						Likes: <span className="font-bold">{meme.likes}</span>
					</p>
				</div>
				<a
					href={meme.image}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-2 text-orange-500 hover:text-orange-900 hover:underline transition-all duration-300 linear text-sm"
				>
					Open Image
				</a>
			</Card>
		</motion.div>
	</a>
);
