type NullToUndefined<T> = T extends null
	? undefined
	: T extends Date
	? T
	: {
			[K in keyof T]: T[K] extends (infer U)[] ? NullToUndefined<U>[] : NullToUndefined<T[K]>;
	  };

export default NullToUndefined;
