import { z } from 'zod';

export const memeSchema = z.object({
	name: z
		.string()
		.min(3, 'Name must be at least 3 characters')
		.max(100, 'Name must be at most 100 characters'),
	image: z
		.string()
		.url('Invalid image URL')
		.refine((url) => url.includes('.jpg') || url.includes('.jpeg') || url.includes('.png'), {
			message: 'Image must be a .jpg, .jpeg, or .png',
		}),
	likes: z
		.number({ invalid_type_error: 'Likes must be a number' })
		.int('Must be an integer')
		.min(0, 'Minimum is 0')
		.max(99, 'Maximum is 99'),
});
