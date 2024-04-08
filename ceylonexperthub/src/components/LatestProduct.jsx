import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const LatestProduct = () => {
  const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getProduct'); 
      setLatestData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {latestData.map((product) => (
            <div key={product._id}>
              <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <img
                  className="h-48 w-full object-cover object-center"
                  src={product.img} 
                  alt="Product Image"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                    {product.name}
                  </h2>
                  <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                      ${product.newPrice}
                    </p>
                    <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                      ${product.price}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      {product.discount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
