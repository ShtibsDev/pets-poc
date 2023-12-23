'use client';

import { useState, type FC, type FormEvent } from 'react';
import { api } from '~/trpc/react';

const RegistrationForm: FC = () => {
	const createUserMutation = api.users.create.useMutation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		createUserMutation.mutate({ email, password, name });
	};

	return (
		<form className="flex flex-col gap-3" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="email">Email: </label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="rounded-lg border border-gray-300 text-gray-900"
					type="email"
					id="email"
				/>
			</div>

			<div>
				<label htmlFor="password">Password: </label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="rounded-lg border border-gray-300 text-gray-900"
					type="password"
					id="password"
				/>
			</div>

			<div>
				<label htmlFor="name">Name: </label>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="rounded-lg border border-gray-300 text-gray-900"
					type="text"
					id="name"
				/>
			</div>

			<button disabled={createUserMutation.isLoading} className="w-20 rounded-lg border border-gray-300 text-gray-900" type="submit">
				{createUserMutation.isLoading ? 'Loading...' : 'Create User!'}
			</button>
		</form>
	);
};

export default RegistrationForm;
