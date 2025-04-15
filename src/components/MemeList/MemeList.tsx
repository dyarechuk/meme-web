import { AnimatePresence, motion } from 'framer-motion';

import { useMemes } from '@/hooks/useMemes';

import { MemeCard } from '@/components/MemeList/MemeCard';

export const MemeList = () => {
	const { data: memes = [] } = useMemes();

	return (
		<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<AnimatePresence>
				{memes.map((meme, index) => (
					<motion.div
						key={meme.id}
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.7,
							delay: index * 0.15,
							ease: 'easeOut',
						}}
					>
						<MemeCard meme={meme} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};
