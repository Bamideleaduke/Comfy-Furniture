import React, { useContext, createContext, useState, useEffect } from "react";
import { useGlobalContext } from "./ProductProvider";

const FilterComponent = createContext();

const FilterContext = (props) => {
  const { products } = useGlobalContext();
  const [gridView, setGridView] = useState(true);
  const [sortBy, setSortBy] = React.useState("lowest-price");
  const [item, setItem] = React.useState(products);
  const [filterBy, setFilterBy] = useState({
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  });
  const [filterProduct, setFilterProduct] = useState([]);
  const [company, setCompany] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [name, setName] = useState("category");
  const [value, setValue] = useState("category");
  const allCategory = [
    "all",
    ...new Set(products.map((item) => item.category)),
  ];
  const [categories, setcategories] = useState(allCategory);

  const setGrid = () => {
    return setGridView(true);
  };

  const setList = () => {
    return setGridView(false);
  };

  // filter
  const filterItems = (e) => {
    let name = e.target.name;
    setName(name);
    let value = e.target.value;
    setValue(value);
    const filterItem = products.filter((item) => {
      console.log(item);
      if (name === "category") {
        value = e.target.textContent;
        console.log(value);
        console.log(name);
        if (value === "all") {
          return item;
        }
        return item.category === value;
      }
      if (name === "company") {
        // value = ;
        setCompany(e.target.value);
        if (company === "all") {
          return item;
        }
        console.log(company);
        return item.company === company;
      }
      if (name === "color") {
        value = e.target.color;
        setSelectedColor(e.target.dataset.color);

        // if (selectedColor === "all") {
        //   return item;
        // }
        // console.log(selectedColor);
        return item.colors === selectedColor;
      }
      if (name === "price") {
        value = Number(value);
      }
      if (name === "shipping") {
        value = e.target.checked;
      }
    });
    console.log(filterItem);
    setFilterProduct(filterItem);
    console.log(filterProduct);
    return filterItem;
    // const newItems = products.filter((item) => item.category === filterBy.category);
    // setFilterProduct(newItems);
    // console.log(newItems)
  };
  useEffect(() => {
    setFilterProduct(products);
  }, [products]);
  const updateSortedItem = (e) => {
    setSortBy(e.target.value);
    // console.log(sortBy);

    const sortArr = filterProduct.sort((a, b) => {
      if (sortBy === "lowest-price") {
        return a.price < b.price ? 1 : -1;
      } else if (sortBy === "highest-price") {
        return a.price > b.price ? 1 : -1;
      } else if (sortBy === "name-a") {
        return a.name < b.name ? 1 : -1;
      } else if (sortBy === "name-z") {
        return a.name > b.name ? 1 : -1;
      } else {
        return a.price < b.price ? 1 : -1;
      }
    });
    // console.log(sortArr);
    setItem([...sortArr]);
  };

  //   console.log(products);
  const values = {
    products,
    gridView,
    setGridView,
    setGrid,
    setList,
    updateSortedItem,
    sortBy,
    item,
    filterItems,
    company,
    selectedColor,
    filterProduct,
  };

  return (
    <FilterComponent.Provider value={values}>
      {props.children}
    </FilterComponent.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterComponent);
};
export { FilterComponent, FilterContext };
