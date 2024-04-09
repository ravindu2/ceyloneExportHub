import React, { useEffect, useMemo, useState } from "react";
import Item from "../product/item";
import img1 from "../product/assets/1.jpeg";
import img2 from "../product/assets/2.jpeg";
import img3 from "../product/assets/3.jpeg";
import img4 from "../product/assets/4.jpeg";
import img5 from "../product/assets/5.jpeg";
import img6 from "../product/assets/6.jpeg";
import img7 from "../product/assets/7.jpeg";
import img8 from "../product/assets/8.jpeg";
import img9 from "../product/assets/9.jpeg";
import img10 from "../product/assets/10.jpeg";
import img11 from "../product/assets/11.jpeg";
import img12 from "../product/assets/12.jpeg";
import img13 from "../product/assets/13.jpeg";
import img14 from "../product/assets/14.jpeg";
import img15 from "../product/assets/15.jpeg";
import img16 from "../product/assets/16.jpeg";
import img17 from "../product/assets/17.jpeg";
import headerImage from "../product/assets/head image.jpeg";

const ProductCategory = () => {
  const products = [
    { name: "Antique", image: img1, category: "Other", price:"$231.12" },
    { name: "Ayurvedic Product", image: img2, category: "Other", price:"$11.99" },
    { name: "Bathik Items", image: img3, category: "BathikItems", price:"$21.24" },
    { name: "Ceylon Tea", image: img4, category: "Other", price:"$91.12" },
    { name: "Clay Products", image: img5, category: "Clay-Products", price:"$831.12" },
    { name: "Coconut & Based Products", image: img6, category: "Other", price:"$31.12" },
    { name: "Dumbara Mats & Cane Boxes", image: img7, category: "Other", price:"$81.12" },
    { name: "Flours", image: img8, category: "Other", price:"$45.12" },
    { name: "Gems & Juwellery", image: img9, category: "Gems&Juwellery", price:"$56.12" },
    { name: "Handlooms", image: img10, category: "Other", price:"$34.12" },
    { name: "Natural Healthy Products", image: img11, category: "Other", price:"$231.12" },
    { name: "Poicelain Tableware", image: img12, category: "Other",price:"$24.00" },
    { name: "Rubber", image: img13, category: "Other", price:"$31.12" },
    { name: "Spieces", image: img14, category: "Spieces", price:"$23.12" },
    { name: "Traditional Marks", image: img15, category: "Other", price:"$231.12" },
    { name: "Traditional Organic Rice", image: img16, category: "Other", price:"$231.12" },
    { name: "Wood Carving", image: img17, category: "Other", price:"$231.12" },
  ];

  const [productList, setProductList] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to get filtered list
  const getFilteredList = () => {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return productList;
    }
    return productList.filter((item) => item.category === selectedCategory);
  };

  // Avoid duplicate function calls with useMemo
  const filteredList = useMemo(getFilteredList, [
    selectedCategory,
    productList,
  ]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-20 font-sans">
        <div className="flex items-center gap-10">
          Filter by Category:
          <select
            name="category-list"
            id="category-list"
            className="p-2"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="">All</option>
            <option value="Clay-Products">Clay Products</option>
            <option value="Gems&Juwellery">Gems & Juwellery</option>
            <option value="Spieces">Spieces</option>
            <option value="BathikItems">Bathik Items</option>
            <option value="Other">other</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-10 px-16">
          {filteredList.map((element) => (
            <Item {...element} key={`${element.name}-${element.category}-${element.image}-${element.price}-${element.image}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
