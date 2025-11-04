import { NextRequest, NextResponse } from "next/server";

import Backendless from "@/utils/backendless";

// HANDLE POST atau mengirim data ke backendless
export async function POST(req: NextRequest) {

    try {
        const { title, content, image, author, slug } = await req.json();
        console.log({ title, content, image, author, slug });
        const response = await Backendless.Data.of("Blogs").save({
            title,
            content,
            image,
            author,
            slug
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Create Blog Successfully',
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

// HANDLE GET atau menarik data dari backendless
export async function GET(req : NextRequest){

    try {
       const response = await Backendless.Data.of('Blogs').find()

       return NextResponse.json(
        {
            success: true,
            message: 'Get Blog Successfully',
            data: response,
        },
        {
            status: 200,
        }
       )
        
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error?.message,
            data: null
        }, {
            status: 500
        })
    }
}