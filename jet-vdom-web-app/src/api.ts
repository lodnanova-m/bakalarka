// apiService.js
export const environment = {
  // Replace with your actual API URL
  apiUrl: "https://master.d3d95ljo92pafp.amplifyapp.com",
};
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${environment.apiUrl}/products`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const { items } = await response.json();
    return items;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getProductById = async (id: any) => {
  try {
    const response = await fetch(`${environment.apiUrl}/products/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const item = await response.json();
    return item;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
