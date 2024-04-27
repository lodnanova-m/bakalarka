export const getAllProducts = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/products`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const { items } = await response.json();
    return items;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const item = await response.json();
    return item;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
