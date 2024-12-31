import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const body = await req.json(); // Parse JSON from the request body
		const { name, email } = body;

		if (!name || !email) {
			return NextResponse.json(
				{ message: "Name and email are required." },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ message: `Hello, ${name}. Email: ${email}` },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "An error occurred while processing the request." },
			{ status: 500 }
		);
	}
}
