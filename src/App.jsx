import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import NotFound from "./pages/NotFound";
import Timeline from "./pages/Timeline";


import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {

  return (
    <>
     <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend/:id" element={<FriendDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/timeline" element={<Timeline />} />
        
      </Routes>

      <Footer />

      <ToastContainer />

    </>
  );
}