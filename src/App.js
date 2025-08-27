import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Course from "./component/Course/Course";
import Details from "./component/Details/Details";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import NotFound from "./component/NotFound/NotFound";

import Lottie from "lottie-react";
import notificationAnimation from "./assets/notification.json";

function App() {
  return (
    // <div className='text-xl text-center'>
    // {/* <h2>
    //   Create animation for lottie files
    // </h2>
    // <Lottie className='w-6/12 m-auto rounded text-center' animationData={notificationAnimation}/> */}
    // </div>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crouse" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deatils" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
