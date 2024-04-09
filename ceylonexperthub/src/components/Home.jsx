import MP1 from "../assets/banner/MP1.jpg";
import MP2 from "../assets/banner/MP2.jpg";
import MP3 from "../assets/banner/MP3.jpg";
import MP4 from "../assets/banner/MP4.jpeg";
import Features from "./Features";
import LatestProduct from "./LatestProduct.jsx";
import SliderComponent from "./SliderComponent.jsx";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <div className="flex justify-between">
          <img src={MP1} alt="Image 1" className="relative w-1/4 h-100" />
          <img src={MP2} alt="Image 2" className="relative w-1/4 h-100" />
          <img src={MP3} alt="Image 3" className="relative w-1/4 h-100" />
          <img src={MP4} alt="Image 4" className="relative w-1/4 h-100" />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
            <div className="font-bold text-white text-8xl">CeylonExportHub</div>
          </div>
        </div>
      </div>

      <br />

      <Features />

      <br />

      <div>
        <div className="m-8 text-center middle-pa">
          <h1 className="text-3xl">Hello</h1>
          <div className="welcome text-[#010679] mt-2">
            <h1 className="mt-2 text-3xl font-bold">Welcome To Ceylon ExportHub</h1>
          </div>
          <p className="mt-2 text-2xl">
            Thanks for visiting our home. We are warmly welcome to the biggest
            online fair in Sri Lanka. We are taking the priority to our
            traditional items in our home. We are ready to provide the best Sri
            Lankan products to you happily. You can see more information and
            about selling items on our website. Let’s start the journey with
            CeylonExportHub.
          </p>
        </div>
      </div>
      <br />
      <SliderComponent />
      <br />
      
        <div className="m-8 text-center middle-pa">
          <h1 className="text-3xl">Our</h1>
          <div className="welcome text-[#010679]">
            <h1 className="text-3xl font-bold">Latest Products</h1>
          </div>
          <p className="text-2xl">
            Now you can check our latest product from here and get the best and
            the lowest selling price experience with CeylonExportHub us. You can
            buy the most uncommon traditional and culturally unique products in
            Sri Lanka.
          </p>
        </div>
    
      <LatestProduct />
    </div>
  );
};

export default Home;
