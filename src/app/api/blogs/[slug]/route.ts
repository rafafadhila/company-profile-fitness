import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/utils/backendless";

interface Params {
    slug: string
}

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<Params> }
) {
    try {
        const { slug } = await params;

        const query = Backendless.DataQueryBuilder.create();
        query.setWhereClause(`slug='${slug}'`)

        const findProductByQuery = await Backendless.Data.of('Blogs').findFirst(
            query
        );

        if (!findProductByQuery) return NextResponse.json(
            {
                success: false,
                message: `Get detail blog with slug ${slug} not found`,
                data: null,
            },
            {
                status: 404,
            }
        )

        return NextResponse.json(
            {
                success: true,
                message: `Get detail blog with slug ${slug} successful`,
                data: findProductByQuery,
            },
            {
                status: 200,
            }
        )

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                success: false,
                message: "Internal server error",
                data: null,
            },
            {
                status: 500,
            }
        )
    }
}