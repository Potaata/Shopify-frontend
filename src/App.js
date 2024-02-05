import logo from "./logo.svg";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Slider from "./components/Slider";
import NavBar2 from "./components/Navbar2.js";
import Breadcrumb from "./components/Breadcrumb.js";
import Footer from "./components/Footer.js";
import SlideCards from "./components/SlideCards.js";
import Service from "./components/Service.js";
import Banner from "./components/Banner.js";
import Overlap from "./components/Overlap.js";
import Overlap2 from "./components/Overlap2.js";
import Phone from "./components/Phone.js";
import Storetasker from "./components/Storetasker.js";
import Expert from "./components/Expert.js";

function App() {
  return (
    <>      
      <NavBar2/>
      <Banner/>
      <Slider />
      <Breadcrumb/>
      <Overlap/>
      <Expert/>
      <Service/>
      <SlideCards/>
      <Storetasker/>
      <Footer/>
      {/* <a className="md:text-xl lg:text-9xl	text-red-600"> ABc</a>

      <a
        href="#"
        class="block md:w-8 sm:w-5 lg:w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="md:text-red-300 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a> */}
    </>
  );
}

export default App;
