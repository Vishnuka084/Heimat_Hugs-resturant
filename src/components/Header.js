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
  //header state
  const [isActive, setIsActive] = useState(false);
  // event Listener
  useEffect(()=>{
    window.addEventListener('scroll',() => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
      <motion.header
      initial='hidden'
      animate={isActive ? 'show' : ''}
      className='bg-pink-200/20 fixed w-full max-w-[1800px] z-50 py-4'
      >
        <div className="container mx-auto">
          <div>
            {/* menu button */}
            <div>menu button</div>
            {/* Logo button */}
            <div>
              <a href="#">
                <img className={`${
                  isActive ? 'w-[90px] h-[90px]' : 'w-[107px] h-[107px]'}`}
                     src={LogoWhite}
                     alt=""
                />
              </a>
            </div>
            {/* social button */}
            <div>
              <Socials/>
            </div>
            {/* nav */}
            <div>
              <Nav/>
            </div>
          </div>
        </div>
      </motion.header>);
};

export default Header;