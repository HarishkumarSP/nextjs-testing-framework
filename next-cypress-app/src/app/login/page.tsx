"use client";
import { signIn } from "next-auth/react";

// You need to have a `.env.local` file in the root of your project with the following content:
// NEXTAUTH_URL,NEXTAUTH_SECRET # Generate a secret key using `openssl rand -base64 32`

export default function Login() {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const username = e.currentTarget.username.value;
		const password = e.currentTarget.password.value;
		const result = await signIn("credentials", {
			username,
			password,
			callbackUrl: "/dashboard", // Redirect to dashboard after login
		});
		if (result?.error) {
			console.error("Login failed:", result.error);
		}
	};
	return (
		<div className='w-full max-w-xs m-auto'>
			<form
				className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
				onSubmit={handleSubmit}
			>
				<h1 className='text-2xl text-center'>Login Test</h1>
				<br />
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='username'
					>
						Username
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						name='username'
						type='text'
						placeholder='Username'
					/>
				</div>
				<div className='mb-6'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='password'
					>
						Password
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
						type='password'
						name='password'
						placeholder='******************'
					/>
				</div>
				<div className='flex justify-center'>
					<button
						className='bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
}
