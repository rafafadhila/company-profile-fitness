import { NextRequest, NextResponse } from "next/server";

interface Params {
    params: {
        slug: string;
    };
}

export async function GET(req: NextRequest, { params }: Params) {
    try {
        const { slug } = params;

        if (!slug || typeof slug !== "string") {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid slug",
                    data: null,
                },
                { status: 400 }
            );
        }

        const query = Backendless.DataQueryBuilder.create();
        query.setWhereClause(`slug='${slug}'`);

        // Use `find` instead of `findFirst` because sometimes findFirst ignores filters
        const results = await Backendless.Data.of("Blogs").find(query);

        if (!results || results.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Blog with slug '${slug}' not found`,
                    data: null,
                },
                { status: 404 }
            );
        }

        const blog = results[0];

        return NextResponse.json(
            {
                success: true,
                message: `Fetched blog with slug '${slug}' successfully`,
                data: blog,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching blog by slug:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
                data: null,
            },
            { status: 500 }
        );
    }
}
