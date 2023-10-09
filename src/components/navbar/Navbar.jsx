import React, { useState } from "react";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  AOS.init({
    once: true,
  });
  return (
    <nav className="navbar" id="navbar" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="700">
      <div className="navbar-brand">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="21" viewBox="0 0 76 21" fill="none">
            <path d="M4.18012 3.54663V11.2266L10.1001 3.54663H13.1201L8.28012 9.78663L13.1801 18.1666H10.2201L6.60012 11.9466L4.18012 15.0466V18.1666H1.62012V3.54663H4.18012Z" fill="#1E1E1E" />
            <path d="M25.1767 18.1666H16.0967V3.54663H25.1767V5.90663H18.6567V9.66663H24.4967V11.9266H18.6567V15.8066H25.1767V18.1666Z" fill="#1E1E1E" />
            <path d="M31.5121 18.1666H28.9521V3.54663H31.5121V9.58663H37.9921V3.54663H40.5522V18.1666H37.9921V11.9666H31.5121V18.1666Z" fill="#1E1E1E" />
            <path
              d="M46.0559 18.1666H43.3959L48.6759 3.54663H51.2959L56.5759 18.1666H53.8759L52.6959 14.7866H47.2359L46.0559 18.1666ZM49.6559 7.90663L47.9959 12.6266H51.9559L50.2759 7.90663C50.1559 7.52663 50.0159 7.08663 49.9759 6.78663C49.9159 7.06663 49.7959 7.50663 49.6559 7.90663Z"
              fill="#1E1E1E"
            />
            <path d="M56.8206 5.90663V3.54663H67.9406V5.90663H63.6606V18.1666H61.1006V5.90663H56.8206Z" fill="#1E1E1E" />
            <path d="M73.4575 3.54663V18.1666H70.8975V3.54663H73.4575Z" fill="#1E1E1E" />
          </svg>
        </a>
      </div>
      <div className="navbar-content">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Data & Informasi</a>
          </li>
          <li>
            <a href="#">Tentang</a>
          </li>
        </ul>
        <button>
          <a href="#">Login</a>
        </button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? <IoClose size={27} onClick={() => setToggleMenu(false)} /> : <RxHamburgerMenu size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu-container">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Data & Informasi</a>
              </li>
              <li>
                <a href="#">Tentang</a>
              </li>
            </ul>
            <button>
              <a href="#">Login</a>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
