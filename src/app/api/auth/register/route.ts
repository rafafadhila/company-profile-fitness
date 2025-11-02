import { NextRequest, NextResponse } from "next/server";

import Backendless from "@/utils/backendless";

export async function POST(req: NextRequest) {

    try {
        const { name, email, password } = await req.json();
        console.log({ name, email, password });
        await Backendless.UserService.register({ name, email, password });

        return NextResponse.json(
            {
                success: true,
                message: 'Register account successfully',
            },
            {
                status: 201,
            }
        )
    } catch (error: any) {
        return NextResponse.json(
            {
                sucess: false,
                message: error?.message,
            },
            {
                status: 500,
            }
        )
    }

}