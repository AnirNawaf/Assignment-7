import logo from "../img/logo-xl.png";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";

export default function Footer() {
  return (
    <footer className="bg-[#2f5d50] text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center items-center">

        <div className="flex justify-center">
          <img src={logo} alt="logo" />
        </div>

        <p className="mt-3 text-sm text-gray-200 ">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mt-6">
          <p className="text-2xl font-bold mb-3 text-gray-200">Social Links</p>

          <div className="flex justify-center gap-5">



            <button className="w-9 h-9 cursor-pointer flex items-center justify-center bg-white rounded-full hover:scale-125 transition">
              <img src={instagram} alt="Instagram" />

            </button>
            <button className="w-9 h-9 cursor-pointer flex items-center justify-center bg-white rounded-full hover:scale-125 transition">
              <img src={facebook} alt="Facebook" />

            </button>
            <button className="w-9 h-9 cursor-pointer flex items-center justify-center bg-white rounded-full hover:scale-125 transition">
              <img src={twitter} alt="Twitter" />

            </button>





          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-20 gap-4">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:underline hover:text-lg">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline hover:text-lg">
              Terms of Service
            </a>
            <a href="#" className="hover:underline hover:text-lg">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}