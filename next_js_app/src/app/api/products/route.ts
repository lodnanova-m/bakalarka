import { NextResponse } from "next/server";
import products from "../../../../_data/db.json";

export async function GET() {
  return NextResponse.json(products);
}
