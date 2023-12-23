import type FileVM from './FileVM';

type UserVM = {
	id: string;
	name?: string;
	email?: string;
	address?: string;
	avatar?: FileVM;
};

export default UserVM;
