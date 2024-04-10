import FL1 from "./Features/iconamoon_delivery-fast-fill.png";
import FL2 from "./Features/tdesign_secured.png";
import FL3 from "./Features/Vector_m.png";
import FL4 from "./Features/world-flag.png";

const Features = () => {
  const features = [
    {
      index: "1",
      img: FL4,
      title: "Made In Sri Lanka",
      description: "100% pure Sri Lankan made products",
    },
    {
      index: "2",
      img: FL1,
      title: "WorldWide Delivery",
      description: "We ship to over 200 countries and regions",
    },
    {
      index: "3",
      img: FL3,
      title: "Secure Payment",
      description: "Pay with the world's most popular & secure payment method",
    },
    {
      index: "4",
      img: FL2,
      title: "Money back Guarantee",
      description: "30 days money back guarantee",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 m-10 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {features.map((product) => (
          <div key={product.index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
            <a href="#" className="flex justify-center mt-4">
              <img
                className="rounded-t-lg"
                src={product.img}
                alt=""
              />
            </a>
            <div className="p-5 flex justify-center">
              <div>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-{#010679} dark:text-{#010679} text-center">
                    {product.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
