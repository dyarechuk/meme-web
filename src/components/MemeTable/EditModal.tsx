import { useState } from 'react';

import { Button } from '@heroui/button';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/modal';
import { Input } from '@heroui/react';

import { Meme } from '@/types/meme';
import { memeSchema } from '@/schemas/memeSchema';

interface EditModalProps {
	meme: Meme;
	onSave: (updatedMeme: Meme) => void;
	onClose: () => void;
}

export const EditModal = ({ meme, onSave, onClose }: EditModalProps) => {
	const [name, setName] = useState(meme.name);
	const [image, setImage] = useState(meme.image);
	const [likes, setLikes] = useState(meme.likes);
	const [errors, setErrors] = useState<{ name?: string; image?: string; likes?: string }>({});

	const handleSave = () => {
		const result = memeSchema.safeParse({ name, image, likes });

		if (!result.success) {
			const { fieldErrors } = result.error.flatten();
			setErrors({
				name: fieldErrors.name?.[0],
				image: fieldErrors.image?.[0],
				likes: fieldErrors.likes?.[0],
			});
			return;
		}

		onSave({ ...meme, name, image, likes });
		onClose();
	};

	return (
		<Modal isOpen={true} backdrop="opaque" onClose={onClose}>
			<ModalContent>
				<ModalHeader className="bg-orange-400 text-white ">Edit Meme #{meme.id}</ModalHeader>
				<ModalBody className="space-y-4 mt-4 text-black">
					<div>
						<Input
							label="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							autoFocus
							color={errors.name ? 'danger' : 'default'}
							variant="bordered"
						/>
						{errors.name && <p className="text-sm text-red-500 ml-3 mt-1">{errors.name}</p>}
					</div>
					<div>
						<Input
							label="Image URL (.jpg)"
							value={image}
							onChange={(e) => setImage(e.target.value)}
							required
							color={errors.image ? 'danger' : 'default'}
							variant="bordered"
						/>
						{errors.image && <p className="text-sm text-red-500 ml-3 mt-1">{errors.image}</p>}
					</div>
					<div>
						<Input
							label="Likes"
							type="number"
							value={`${likes}`}
							onChange={(e) => setLikes(Number(e.target.value))}
							required
							color={errors.likes ? 'danger' : 'default'}
							variant="bordered"
						/>
						{errors.likes && <p className="text-sm text-red-500 ml-3 mt-1">{errors.likes}</p>}
					</div>
				</ModalBody>
				<ModalFooter className="flex justify-end gap-2">
					<Button variant="ghost" onPress={onClose} aria-label="Cancel editing meme">
						Cancel
					</Button>
					<Button variant="solid" onPress={handleSave}>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
