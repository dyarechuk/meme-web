import axios from 'axios';

import { Meme } from '@/types/meme';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getMemes = async (
	sort: keyof Meme = 'id',
	order: 'asc' | 'desc' = 'asc'
): Promise<Meme[]> => {
	const { data } = await axios.get<Meme[]>(`${API_BASE}/memes`, {
		params: { sort, order },
	});
	return data;
};

export const updateMeme = async (id: number, data: Partial<Meme>): Promise<Meme> => {
	const { data: updated } = await axios.patch<Meme>(`${API_BASE}/memes/${id}`, data);
	return updated;
};
