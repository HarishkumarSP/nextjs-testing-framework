"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [submitted, setSubmitted] = useState(false);
	const [data, setData] = useState(null);

	const handleSubmit = async event => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const payload = {
			name: formData.get("name"),
			email: formData.get("email"),
		};

		try {
			const response = await fetch("/api/submit", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}

			const result = await response.json();
			console.log("API Response:", result);
			setSubmitted(true);
			setData(result);
		} catch (error) {
			console.error("Form submission error:", error);
		}
	};

	return (
		<div className='w-full max-w-xs m-auto'>
			<h1 className='text-2xl text-center'>Form Test</h1>
			{!submitted ? (
				<form
					onSubmit={handleSubmit}
					className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
				>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='name'
					>
						Name
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						name='name'
						type='text'
						placeholder='name'
						required
					/>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='email'
					>
						email
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						name='email'
						type='email'
						placeholder='email'
						required
					/>
					<button
						className='bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
						type='submit'
					>
						Submit
					</button>
				</form>
			) : (
				<div className='p-5'>
					<h2>Form Submitted</h2>
					<p>Response: {data?.message}</p>
				</div>
			)}
			<div className='flex justify-between'>
				<Link
					className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
					href='/about'
				>
					About
				</Link>
				<Link
					className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
					href='/login'
				>
					Login
				</Link>
			</div>
		</div>
	);
}
