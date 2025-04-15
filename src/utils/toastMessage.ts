import { addToast } from '@heroui/toast';

export const notifySuccess = (name: string) =>
	addToast({
		title: 'Meme updated!',
		description: `Meme "${name}" was successfully saved.`,
		color: 'success',
	});

export const notifyError = () =>
	addToast({
		title: 'Error updating meme',
		description: 'Failed to update the meme. Please try again.',
		color: 'danger',
	});
