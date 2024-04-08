const LatestProduct = () => {
  return (
    <div>
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-12">
          {" "}
          {/* Increased gap values for more spacing */}
          {Latestdata.map((d) => (
            <div key={d.id} className="mb-8">
              <div className="mx-auto overflow-hidden duration-300 transform bg-white rounded-lg shadow-md mt-11 w-80 dark:bg-slate-800 hover:scale-105 hover:shadow-lg">
                <img
                  className="object-cover object-center w-full h-48"
                  src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Product Image"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    {d.name}
                  </h2>
                  <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                      ${d.newprice}
                    </p>
                    <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                      ${d.price}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      {d.discount} off
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

const Latestdata = [
  {
    id: "1",
    img: "",
    name: "kithul Tricle",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "2",
    img: "",
    name: "Organic Rice suwadal",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "3",
    img: "",
    name: "Jackfruit jam",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "4",
    img: "",
    name: "Coconut cup & kithul spoon",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "5",
    img: "",
    name: "kithul Tricle",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "6",
    img: "",
    name: "Organic Rice suwadal",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "7",
    img: "",
    name: "Jackfruit jam",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "8",
    img: "",
    name: "Coconut cup & kithul spoon",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
];
export default LatestProduct;
