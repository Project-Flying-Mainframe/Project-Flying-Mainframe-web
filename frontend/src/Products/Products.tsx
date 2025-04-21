import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

type Product = {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  rating: number;
  numberOfReviews: number;
  imageUrl: string;
};

const emptyProducts: Product[] = [];

function Products() {
  const [products, setProducts] = useState(emptyProducts);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await axios.get<Product[]>("http://localhost:5292/catalog", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [getAccessTokenSilently]);

  return (
    <div className="content">
      <ul className="products">
        {products.map((product, index) => (
          <li key={index}>
            <div className="product">
              <img className="product-image" src={product.imageUrl} alt="product" />
              <div className="product-name">
                <a href="product.html">{product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {product.rating} Stars ({product.numberOfReviews} reviews)
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
