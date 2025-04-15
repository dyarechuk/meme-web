import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateMeme } from '@/api/memes';

import { Meme } from '@/types/meme';

interface UpdatePayload {
	id: number;
	data: Partial<Meme>;
}

export const useUpdateMeme = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ id, data }: UpdatePayload) => updateMeme(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['memes'] });
		},
	});
};
