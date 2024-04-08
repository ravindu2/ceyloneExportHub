import React from "react";
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
    { name: "Antique", image: img1 },
    { name: "Ayurvedic Product", image: img2 },
    { name: "Bathik Items", image: img3 },
    { name: "Ceylon Tea", image: img4 },
    { name: "Clay Products", image: img5 },
    { name: "Coconut & Based Products", image: img6 },
    { name: "Dumbara Mats & Cane Boxes", image: img7 },
    { name: "Flours", image: img8 },
    { name: "Gems & Juwellery", image: img9 },
    { name: "Handlooms", image: img10 },
    { name: "Natural Healthy Products", image: img11 },
    { name: "Poicelain Tableware", image: img12 },
    { name: "Rubber", image: img13 },
    { name: "Spieces", image: img14 },
    { name: "Traditional Marks", image: img15 },
    { name: "Traditional Organic Rice", image: img16 },
    { name: "Wood Carving", image: img17 },
  ];

  return (
    <div>
      <div>
        <img src={headerImage} alt="Header" className="w-full h-auto" />
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold text-blue-900">Ceylon Product</p>
        <p className="text-3xl font-semibold text-blue-900">
          Select What You Want
        </p>
        <p className="mt-2 text-lg font-normal text-black">
          Welcome to our Product Home. These product purely made in Sri Lankan
          Traditional Products. You can select from here the product category
          what you need and you can select the items and pay easily. Please
          don’t forget to rate items if you are satisfied with them.
        </p>
      </div>
      <br/>
      <div className="grid grid-cols-4 gap-10 px-16">
        {products.map((product, index) => (
          <div
            className="flex flex-col items-center p-1 border-2 border-blue-600 rounded-xl"
            key={index}
          >
            <img
              src={product.image}
              alt=""
              className="h-52 w-52 rounded-t-xl"
            />
            <span className="h-12 pt-1 font-bold text-center border-t-2 border-blue-600 w-52">
              {product.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
