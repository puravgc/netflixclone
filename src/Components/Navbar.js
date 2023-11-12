import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [shownav, setshownav] = useState(false);
  const navigate = useNavigate()
  const transitionNav = () => {
    const navbg = document.querySelector(".nav");
    if (window.scrollY > 100) {
      navbg.style.backgroundColor = "#111";
    } else {
      navbg.style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);

    return () => {
      window.removeEventListener("scroll", transitionNav);
    };
  }, []);

  return (
    <div className="nav">
      <div className="content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          className="logo"
          onClick={()=>{navigate("/")}}
        />
        <img
          className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          onClick={()=>{navigate("/profile")}}
        />
      </div>
    </div>
  );
};

export default Navbar;
