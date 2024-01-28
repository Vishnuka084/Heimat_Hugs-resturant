import React,{ useState, useEffect} from 'react';

// import components
import Nav from '../components/Nav';
import Socials from "./Socials";
//import logo
import LogoWhite from '../assets/img/header/logo-white.png';
//import motion
import {motion} from "framer-motion";
//import variants
import { staggerContainer,fadeIn} from "../variants";

// header variants
const headerVariants = {
  hidden : {
    padding : '84px 0 84px 0',
    background: 'none',
  },
  show: {
    padding: '14px 0 14px 0',
    background: 'rgba(0,0,0,0.92)',
    transition: {
      type:'spring',
    },
  },
};


const Header = () => {
  //header
  const [isActive, setIsActive] = useState(false);
  // event  listener
  useEffect(()=> {
    window.addEventListener('scroll',() => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);

    });
  });
  return (


  );
};

export default Header;
