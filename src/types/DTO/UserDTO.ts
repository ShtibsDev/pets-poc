import { type FileMetaData, type User } from '@prisma/client';

type UserDTO = User & { avatar: FileMetaData | null };

export default UserDTO;
