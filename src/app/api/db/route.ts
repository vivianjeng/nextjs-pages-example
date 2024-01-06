import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
    const { results } = await process.env.DB.prepare(
        "SELECT * FROM Customers WHERE CompanyName = ?"
    )
        .bind("Bs Beverages")
        .all();
    return new Response(JSON.stringify(results));
}
