import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import NotFound from "./pages/NotFound";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import Footer from "./components/Footer";

import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const location = useLocation();

  const hideLayout =
    !["/", "/timeline", "/stats"].includes(location.pathname) &&
    !location.pathname.startsWith("/friend/");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend/:id" element={<FriendDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/stats" element={<Stats />} />

      </Routes>

      {!hideLayout && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={400}
        newestOnTop
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        closeOnClick
        theme="colored"
      />

    </>
  );
}