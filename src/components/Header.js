import React,{ useState,  useEffect}from 'react';
//import component
import Nav from '../components/Nav';
import Socials from '../components/Socials';

//logo
import LogoWhite  from '../assets/img/header/logo-white.png';

// motion
import {motion} from 'framer-motion';

// variants
import { staggerContainer, fadeIn} from '../variants';

// header variants
const headerVariants = {
  hidden: {
    padding: '84px 0 84px 0',
    background: 'none',
  },
  show: {
    padding: '14px 0 14px 0',
    background: 'rgb(0,0,0,0.92)',
    transition: {
        type: 'spring',
    },
  },
};


const Header = () => {
  return <header className='bg-pink-200'>Header</header>;
};

export default Header;