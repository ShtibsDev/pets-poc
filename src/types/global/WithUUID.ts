type WithUUID<T> = {
	[Key in keyof T]: Key extends 'id'
		? T[Key] extends string
			? UUID
			: T[Key]
		: T[Key] extends object
		? T[Key] extends Date
			? Date
			: WithUUID<T[Key]>
		: T[Key] extends object | null
		? T[Key] extends Date | null
			? Date | null
			: WithUUID<T[Key]> | null
		: T[Key];
};

export default WithUUID;
