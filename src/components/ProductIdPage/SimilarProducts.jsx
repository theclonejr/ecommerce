import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../HomePage/ProductCard";

const SimilarProducts = ({ categoryId, idProd }) => {
  const [productsByCategory, getProductsByCategory] = useFetch();

  useEffect(() => {
    if (categoryId) {
      const url = `http://localhost:8080/products?categoryId=${categoryId}`;
      getProductsByCategory(url);
    }
  }, [categoryId]);

  return (
    <article>
      <h2>Similar Products</h2>
      <div className="product__container">
        {productsByCategory
          ?.filter((prod) => prod.id !== idProd)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </article>
  );
};

export default SimilarProducts;
