// Mendefinisikan URL API endpoint
const apiUrl =
  "https://crudcrud.com/api/26078e07d5dc4e3d8e04dd36aa2fc78f/products";

// Mendapatkan data produk dari API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Memproses data produk yang diperoleh dari API
    console.log(data); // Tampilkan data JSON dari respon API
    displayProducts(data); // Panggil fungsi untuk menampilkan produk
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Fungsi untuk menampilkan produk dalam bentuk daftar
function displayProducts(products) {
  const productList = document.getElementById("productList");
  // productList.innerHTML = ''; // Mengosongkan daftar produk sebelum menambahkan yang baru

  // Loop melalui setiap produk dan membuat item daftar
  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - Rp ${product.price}`;
    productList.appendChild(listItem);
  });
}
