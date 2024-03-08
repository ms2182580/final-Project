export async function fetchNotes() {
  const res = await fetch("https://fakestoreapi.com/users")
    .then((response) => {
      if (!response.ok) throw new Error("Unable to fetch Users!");
      return response.json();
    })
    .then((data) => {
      return data;
    });

  return res;
}

export const userLogin = async (data) => {
  try {
    console.log("data in login api ", data);

    const response = await fetch(`https://fakestoreapi.com/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }
    console.log("response api ", response);
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export async function fetchProducts() {
  const Products = await fetch("https://fakestoreapi.com/products")
    .then((response) => {
      if (!response.ok) throw new Error("Unable to fetch Products");
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return Products;
}
