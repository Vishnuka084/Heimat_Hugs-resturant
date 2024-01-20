import React from 'react';
//import data
import { heroData } from '../data';
//import component
import Header from "./Header";
//import motion
import { motion} from "framer-motion";
//import variants
import { fadeIn ,staggerContainer} from "../variants";


const Hero = () => {
  const { pretitle ,title ,subtitle btnText} = heroData
  return (
      <section className='min-h-[980px] bg-hero bg-cover bg-right'>
        {/* header */}
        <header/>
        <div className='container mx-auto'>
          {/*text*/}
          <div>
            <div>{pretitle}</div>
            <div>{title}</div>
            <div>{subtitle}</div>
            <div>{btnText}</div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
