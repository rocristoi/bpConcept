import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [hasScrolledPast, setHasScrolledPast] = useState(false);
    const breakpoint = 10;

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > breakpoint) {
            setHasScrolledPast(true);
          } else {
            setHasScrolledPast(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
                <motion.nav className={"transition-all w-full flex flex-row justify-center items-center items-center h-24 fixed top-0 z-50"}
                style={{
                  backgroundColor: hasScrolledPast ? 'rgba(18, 18, 18, 1)' : 'transparent', // Background color based on scroll
                }}
                transition={{
                  backgroundColor: { duration: 0.5, ease: 'easeInOut' }, // Ensure smooth background color transition
                }}
                >
                    <div className='flex flex-row items-center justify-between w-[1200px]'>
                <div className="flex flex-row items-center">
                    <img
                    src="https://beach-please-web.b-cdn.net/wp-content/uploads/2022/05/Logo-mic-1024x773-1.webp"
                    alt="byflow"
                    className="w-20 h-20 object-contain"
                    />
                    <ul className="flex flex-row gap-10 ml-10">
                    <li className="font-custom text-white">INFO</li>
                    <li className="font-custom text-white">F.A.Q.</li>
                    </ul>
                </div>

                            <div className="text-black flex flex-row justify-center items-center gap-10 ">
                                <motion.button className='h-10 w-28 bg-[#74f94d] flex flex-row justify-center items-center rounded-full'
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.99}}

                                >
                                <span className='font-bold'>TICKETS</span>
                                </motion.button>
   
                            </div>
                            </div>
                            </motion.nav>


  )
}

export default Navbar