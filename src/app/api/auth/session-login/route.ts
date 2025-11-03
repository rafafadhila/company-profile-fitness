import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const objectId = req?.headers.get('authorization')?.split(' ')[1]

        if (!objectId)
            return NextResponse.json(
                {
                    success: false,
                    message: 'ObjectId must be provide',
                    data: null,
                },
                {
                    status: 401,
                }
            );

        const response = await Backendless.Data.of('Users').findById(objectId);

        return NextResponse.json({
            success: true,
            message: 'Session login successfull',
            data: response
        }, {
            status: 200
        })

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: error?.message,
            data: null
        }, {
            status: 500
        })
    }
}