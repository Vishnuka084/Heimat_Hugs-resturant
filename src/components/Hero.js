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
          <motion.div className='text-center flex flex-col items-center'>
            <motion.div variants={fadeIn('down','tween',0.2,1.1)}
                        className='text-white text-[24px] lg:text-[28px]
            font-primary italic lg:font-medium mb-1'>{pretitle}</motion.div>
              {/*title */}
            <motion.h1
                variants={fadeIn('down','tween',0.3,1.1)}
                className='h1 mb-5'>
                {title}
            </motion.h1>
            <div className='text-white max-w-[54px] mb-8'>{subtitle}</div>
            <div className='btn'>{btnText}</div>
          </motion.div>
        </motion.div>
      </section>
  );
};

export default Hero;
