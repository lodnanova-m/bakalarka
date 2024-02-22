import { Product } from "@/models/models";
import { NextResponse } from "next/server";
import products from "../../../../../_data/db.json";

export async function GET(request: Request, context: any)
{
    const { params } = context;
    return NextResponse.json({
        product: products.products.find((product: Product) => product.id == params.id),
    });
}