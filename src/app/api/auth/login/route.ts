import { NextRequest, NextResponse } from "next/server"
import Backendless from "@/utils/backendless"

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json()

        console.log({ email, password })
        const user = await Backendless.UserService.login(email, password, true)

        return NextResponse.json(
            {
                success: true,
                message: "Login successful",
                user,
            },
            {
                status: 200,
            },
        )
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                message: error?.message || "Login failed",
            },
            {
                status: 500,
            }
        )
    }
}
