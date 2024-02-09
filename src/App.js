import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Slider from "./components/Slider";
import NavBar2 from "./components/Navbar2.js";
import Breadcrumb from "./components/Breadcrumb.js";
import Footer from "./components/Footer.js";
import SlideCards from "./components/SlideCards.js";
import Service from "./components/Service.js";
import Banner from "./components/Banner.js";
import Storetasker from "./components/Storetasker.js";
import Expert from "./components/Expert.js";
import StoretaskerExpert from "./components/StoretaskerExpert.js";
import Testimonial from "./components/Testimonial.js";
import Overlap2 from "./components/Overlap2.js";
import NavBar from "./components/Navbar.js";
import IconPage from "./IconPage.js";
import IconPageGlobal from "./components/IconPageGlobal.js";

function App() {
  return (
    <>
      {/*Return all the webpage components*/}
      {/* <NavBar2 /> */}
      <NavBar />
      <Banner />
      <Slider />
      <Breadcrumb />
      <Overlap2 />
      <Service />
      <SlideCards />
      <StoretaskerExpert />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
library.add(fab, fas, far);
