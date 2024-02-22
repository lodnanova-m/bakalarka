import { Product } from "@/models/models";
import { NextResponse } from "next/server";
const products: Product[] = [
    {
      "id": 1,
      "name": "Coat",
      "price": 89,
      "description": "Lorem ipsum",
      "image": "/home_image.jpg"
    },
    {
      "id": 2,
      "name": "Dress",
      "price": 40,
      "description": "A very nice dress",
      "image": "/dress.jpg"
    },
    {
      "id": 3,
      "name": "Blazer",
      "price": 30,
      "description": "A very nice blazer",
      "image": "/blazer.jpg"
    },
    {
      "id": 4,
      "name": "Pants",
      "price": 20,
      "description": "A very nice pants",
      "image": "/pants.jpg"
    }
  ];
export async function GET(){
    return NextResponse.json({
        products
    })
}