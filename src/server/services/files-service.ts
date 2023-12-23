import { type FileMetaData } from '@prisma/client';

import type FileVM from '~/types/VM/FileVM';

export function mapFileToVM(file: FileMetaData): FileVM {
	const { id, filename, type, url } = file;
	return { id: id.toString(), filename, type, url };
}
