import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn , textVariant} from '../utils/motion';
const ServiceCard = ({index,title,icon}) => {
  return(
    <p>{title}</p>
  )
  
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl
        leading-[30px]">
          Founder at OpInCo Community.
          I am passionate about Machine Learning 
          and Open Source. I am a GSOC'21 Student in 
          the org of Tensorflow under the tfjs project. 
          I am Postman Student Leader. I am also
          Organizer at TFUG Durg,CNCF Durg. Organizer at 
          Azure Developer Community Raipur.
          I am also a GOLD Microsoft Learn Student Ambassador.

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About