import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/HomePage/ProductCard";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";
import './styles/HomePage.css'

const HomePage = () => {
  const [nameValue, setNameValue] = useState("");
  const [categorySelect, setCategorySelect] = useState("all");
  const [priceRange, setPriceRange] = useState({
    from: 0,
    to: Infinity,
  });
  const products = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const inputName = useRef();

  const handleInputName = () => {
    setNameValue(inputName.current.value.toLocaleLowerCase());
  };

  const callBackFilter = (prod) => {
    //FILTRADO POR NOMBRE
    const filterName = prod.title.toLocaleLowerCase().includes(nameValue);
    //FILTRADO POR CATEGORIA
    const filterCategory =
      categorySelect === "all" ? true : categorySelect === prod.category.id;
    //FILTRADO POR PRECIO
    const price = +prod.price;
    const filterPrice = priceRange.from <= price && price <= priceRange.to;
    return filterName && filterCategory && filterPrice;
  };

  return (
    <div>
      <input ref={inputName} onChange={handleInputName} type="text" />
      <div>
        <h2>Filters</h2>
        <FilterPrice setPriceRange={setPriceRange} />
        <FilterCategory setCategorySelect={setCategorySelect} />
      </div>
      <div className="product__container">
        {products?.filter(callBackFilter).map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
