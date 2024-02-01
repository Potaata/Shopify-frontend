import logo from "./logo.svg";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Associates from "./components/Associates.js";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Associates />
      <a className="md:text-xl lg:text-9xl	text-red-600"> ABc</a>

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
      </a>
    </>
  );
}

export default App;
