import React from 'react'
import UnderlineText from './underlineText'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt';

const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

const Prices = () => {


  return (

<div className='bg-[#071630] h-[900px]'>
    <div className='ml-60'>
        <span className='font-custom text-[40px]'>Tickets & Prices</span>
    </div>
    <div className='px-60 '>
        <div className='flex flex-row justify-evenly mt-20'>
            <motion.div
                       variants={fadeIn("down", "spring", 1.0, 1.5)}
                       initial="hidden"
                       whileInView="show" 
                       viewport={{ once: true }}>
            <Tilt scale="1.05" tiltMaxAngleX="-5" tiltMaxAngleY="-5">
            <div className='bg-white rounded-2xl relative' style={{height: "600px", width: "400px"}}>
                <div className=''>
                <div className='h-max flex flex-col items-center justify-center '>
                    <div className='mt-2 h-max w-20 h-4 rounded-xl bg-[#071630]'></div>
                <span className='font-custom text-black text-[30px] mt-8 '>General Access</span>
                <span className='font-black text-black'>5 DAY PASS &nbsp;|&nbsp; EARLYBIRD  </span>
                </div>
                <div className='h-max flex items-center justify-center mt-10'>
                    <span className='text-[45px] text-[#74f94d] '> <UnderlineText text="899 RON" color="#74f94d"/></span>
                </div>
                <div className='mt-10 flex flex-col gap-1 text-black items-center justify-center'>
                        <span className='font-medium '>• 5-day access to the festival</span>
                        <span className='font-medium '>• Includes the 170 EUR ticket price</span>
                        <span className='font-medium '>• Includes the issuance fee of 10 EUR</span>
                        <span className='font-medium '>• Unforgettable experience</span>


                </div>
                </div>
                <div className='text-black absolute bottom-[60px]  left-1/2 transform -translate-x-1/2 bottom-10'>
                <a href="https://bilete.beach-please.ro/" target="_blank" >
                    <motion.button className=' w-40 h-10 rounded-3xl  font-bold text-[19px] flex items-center justify-center shadow-glow'
                        initial={{scale: 1, color: "rgb(0,0,0)", backgroundColor: 'rgba(116, 249, 77, 1)'}}
                        whileHover={{scale: 1.1, color: 'rgb(255,255,255)', backgroundColor: 'rgba(106, 229, 70, 1)' }}
                        whileTap={{scale: 0.95}}
                        >
                            BUY
                        </motion.button>
                        </a>
                </div>
            </div>
            </Tilt>
            </motion.div>

            <motion.div
                                   variants={fadeIn("down", "spring", 0, 1.50)}
                                   initial="hidden"
                                   whileInView="show" 
                                   viewport={{ once: true }}
            >
            <Tilt scale="1.05" tiltMaxAngleX="-5" tiltMaxAngleY="-5">

            <div className='w-[400px] h-[600px] bg-white rounded-2xl relative'>
                <div>
                <div className='h-max flex flex-col items-center justify-center '>
                <div className='mt-2 h-max w-20 h-4 rounded-xl bg-[#071630]'></div>
                <span className='font-custom text-black text-[30px] mt-8'>ULTRA VIP</span>
                <span className='font-black text-black'>5 DAY PASS &nbsp;|&nbsp; EARLYBIRD  </span>
                </div>
                <div className='h-max flex items-center justify-center mt-10'>
                    <span className='text-[45px]  text-[#071630]'> <UnderlineText text="1999 RON" color="#071630" lineColor="#071630"/></span>
                </div>
                <div className='mt-10 flex flex-col gap-1 px-10 text-black items-center justify-center text-center'>
                        <span className='font-medium '>• Elevated platform with the best view of the Main Stage</span>
                        <span className='font-medium '>• Ability to reserve a table in the Lounge</span>
                        <span className='font-medium '>• 5-day access to the festival</span>
                        <span className='font-medium '>• Unforgettable experience</span>
                        <span className='font-medium '>• Dedicated toilets</span>


                </div>
                </div>
                <div className='text-black absolute bottom-[60px] left-1/2 transform -translate-x-1/2 bottom-10'>
                <a href="https://bilete.beach-please.ro/" target="_blank" >
                    <motion.button className=' w-40 h-10 rounded-3xl  font-bold text-[19px] flex items-center justify-center shadow-glow'
                        initial={{scale: 1, color: "rgb(0,0,0)", backgroundColor: 'rgba(116, 249, 77, 1)'}}
                        whileHover={{scale: 1.1, color: 'rgb(255,255,255)', backgroundColor: 'rgba(106, 229, 70, 1)' }}
                        whileTap={{scale: 0.95}}
                        >
                            BUY
                        </motion.button>
                        </a>
                </div>
            </div>      
            </Tilt>
            </motion.div>

            <motion.div
                                   variants={fadeIn("down", "spring", 2.0, 1.50)}
                                   initial="hidden"
                                   whileInView="show" 
                                   viewport={{ once: true }} 
                                    className=''>
            <Tilt scale="1.05" tiltMaxAngleX="-5" tiltMaxAngleY="-5">

            <div className='w-[400px] h-[600px] bg-white rounded-2xl relative'>
                <div>
                <div className='h-max flex flex-col items-center justify-center'>
                <div className='mt-2 h-max w-20 h-4 rounded-xl bg-[#071630]'></div>
                <span className='font-custom text-black text-[30px] mt-8'>UPGRADE</span>
                <span className='font-black text-black'>General Access &nbsp;»&nbsp; ULTRA VIP  </span>
                </div>
                <div className='h-max flex items-center justify-center mt-10'>
                    <span className='text-[45px] text-[#74f94d] '> <UnderlineText text="1350 RON" color="#74f94d"/></span>
                </div>
                <div className='mt-10 flex flex-col gap-1 px-10 text-center text-black items-center justify-center'>
                        <span className='font-medium '>• This is NOT a ticket, but an UPGRADE for participants who already have a General Access (5 Days Pass) ticket.</span>
                        <span className='font-medium '>• At festival entry, the participant must present both the General Access ticket and the Upgrade, with the names on both matching the participant’s ID.</span>
                        <span className='font-medium '>• Includes the issuance fee of 10 EUR</span>


                </div>
                </div>
                <div className='text-black absolute bottom-[60px] left-1/2 transform -translate-x-1/2 bottom-10'>
                <a href="https://bilete.beach-please.ro/" target="_blank" >
                    <motion.button className=' w-40 h-10 rounded-3xl  font-bold text-[19px] flex items-center justify-center shadow-glow'
                        initial={{scale: 1, color: "rgb(0,0,0)", backgroundColor: 'rgba(116, 249, 77, 1)'}}
                        whileHover={{scale: 1.1, color: 'rgb(255,255,255)', backgroundColor: 'rgba(106, 229, 70, 1)' }}
                        whileTap={{scale: 0.95}}
                        >
                            BUY
                        </motion.button>
                        </a>
                </div>
            </div>
            </Tilt>
            </motion.div>

        </div>

    </div>

</div>


  )
}

export default Prices