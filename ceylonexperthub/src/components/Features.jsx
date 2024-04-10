import FL1 from "./Features/iconamoon_delivery-fast-fill.png";
import FL2 from "./Features/tdesign_secured.png";
import FL3 from "./Features/Vector_m.png";
import FL4 from "./Features/world-flag.png";

const Features = () => {
  return (
    <div>
      <div className="grid grid-cols-1 m-10 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {features.map((product) => (
          <div key={product.index} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
            <a href="#" className="flex justify-center mt-4">
              <img
                class="rounded-t-lg"
                src={product.img}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-{#010679} dark:text-{#010679}">
                  {product.title}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.discription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    index: "1",
    img: FL4,
    title: "Made In Sri Lanka",
    discription: "100% pure Sri Lankan made products",
  },
  {
    index: "2",
    img: FL1,
    title: "WorldWide Delivery",
    discription: "We ship to over 200 countries and regions",
  },
  {
    index: "3",
    img: FL3,
    title: "Secure Payment",
    discription: "pay with the world's most popular & secure payment method",
  },
  {
    index: "4",
    img: FL2,
    title: "Money back Guarantee",
    discription: "30 days money back garantee",
  },
];

export default Features;
