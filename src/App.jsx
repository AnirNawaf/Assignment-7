import Navbar from "./components/Navbar";
import Home from "./pages/Home";


import Footer from "./components/Footer";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {

  return (
    <>
      <Navbar />
      <Home/>
      <Footer />
      
         
    </>
  );
}