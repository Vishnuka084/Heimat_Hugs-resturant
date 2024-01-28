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
  const { pretitle ,title ,subtitle,btnText} = heroData
  return (
      <section className='min-h-[980px] bg-hero bg-cover bg-right'>
        {/* header */}
        <header/>
        <motion.div
            variants={staggerContainer(0.31)}
            initial='hidden'
            className='container mx-auto min-h-[980px] flex
        justify-center items-center'>
          {/*text*/}
          <div className='text-center flex flex-col items-center'>
            <div className='text-white text-[24px] lg:text-[28px]
            font-primary italic lg:font-medium mb-1'>{pretitle}</div>
            <div className='h1 mb-5'>{title}</div>
            <div className='text-white max-w-[54px] mb-8'>{subtitle}</div>
            <div className='btn'>{btnText}</div>
          </div>
        </motion.div>
      </section>
  );
};

export default Hero;
