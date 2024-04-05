import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Configuration from "openai"
import OpenAIApi from "openai"

const openai = new OpenAIApi({
    apiKey: "lm-studio",
    baseURL: "http://localhost:1234/v1", 
});

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 500 });
        }

        if (!openai.apiKey) {
            return new NextResponse("OpenAI API Key not configured", { status: 500 });
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 500 });
        }

        const response  = await openai.chat.completions.create({
            messages,
            model: "gpt-3.5-turbo",
        });

        return NextResponse.json(response.choices[0].message);
    } catch (err) {
        console.error(err);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}