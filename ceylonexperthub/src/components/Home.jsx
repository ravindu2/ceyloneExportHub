import Banner from "../assets/banner/banner.jpg";
import Features from "./Features";
import LatestProduct from "./LatestProduct.jsx";
import SliderComponent from "./SliderComponent.jsx";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="flex justify-between">
          <img src={Banner} alt="main image" className="" />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-20">
            <div className="font-bold text-white text-8xl drop-shadow-lg">CeylonExportHub</div>
          </div>
        </div>
      </div>

      <br />

      <Features />

      <br />

      <div>
        <div className="m-8 text-center middle-pa">
          <div className="bg-blue-100 p-6 rounded-lg h-auto">
            <h1 className="text-3xl text-black">Hello</h1>
            <div className="welcome text-blue-700 mt-2">
              <h1 className="mt-2 text-3xl font-bold">Welcome To Ceylon ExportHub</h1>
            </div>
            <p className="mt-2 text-lg md:text-xl lg:text-2xl text-blue-900">
              Thanks for visiting our home. We are warmly welcome to the biggest
              online fair in Sri Lanka. We are taking the priority to our
              traditional items in our home. We are ready to provide the best Sri
              Lankan products to you happily. You can see more information and
              about selling items on our website. Let’s start the journey with
              CeylonExportHub.
            </p>
            {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore More</button> */}
          </div>
        </div>
      </div>
      <br />
      <SliderComponent />
      <br />
      
      <div className="m-3 text-center middle-pa">
        <div className="bg-blue-100 p-6 rounded-lg h-auto">
          <h1 className="text-3xl text-black">Our</h1>
          <div className="welcome text-blue-700">
            <h1 className="text-3xl font-bold mt-2">Latest Products</h1>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-900 mt-2">
            Now you can check our latest product from here and get the best and
            the lowest selling price experience with CeylonExportHub us. You can
            buy the most uncommon traditional and culturally unique products in
            Sri Lanka.
          </p>
          {/* <a href="#" className="text-blue-500 hover:underline">View All Products</a> */}
        </div>
      </div>
      <LatestProduct />
    </div>
  );
};

export default Home;
