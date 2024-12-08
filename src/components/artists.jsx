import React from 'react'
import UnderlineText from './underlineText'
import { motion } from 'framer-motion'


const AristsLike = [
    {
    name: "DON TOLIVER",
    link: "https://www.youtube.com/watch?v=k-kfQ8LOoTU",
    photo: "https://images.genius.com/b344b407332e2114a685147bf792cc1e.675x675x1.jpg"
    },
    {
        name: "TRAVIS SCOTT",
        link: "https://www.youtube.com/watch?v=Hj4SV-XPK7s&t=2031s",
        photo: "https://www.billboard.com/wp-content/uploads/media/Travis-Scott-Hard-Summer-at-Auto-Club-Speedway-july-2016-billboard-1548.jpg"
    },
    {
        name: "YEAT",
        link: "https://www.youtube.com/watch?v=Co8c4YzCo0U",
        photo: "https://wallpapers.com/images/hd/american-rapper-yeat-in-white-btg7f13kkjag3uxi.jpg"
    }
]

const ArtistCard = ({ name, link, photo }) => {
    const variants = {
        initial: { color: "#FFFFFF" }, 
        hover: { color: "#74f94d" },   
      };
    
      const handleRedirect = (url) => {
        window.open(url, "_blank");
      };

    return(
        <motion.div
        className="w-[300px] flex justify-center flex-col items-center cursor-pointer"
        whileHover="hover"
        initial="initial"
        onClick={() => handleRedirect(link)}
      >
        <img src={photo} alt={name} className='w-[300px] h-[300px] rounded-xl object-cover' />
        <motion.span
          variants={variants}
          className="text-[35px] font-custom"
        >
          <UnderlineText text={name} />
        </motion.span>
        <span className="mt-2 font-bold text-[#74f94d]">
          See the 2024 show »
        </span>
      </motion.div>
    )
}

const Artists = () => {


  return (

<div className='mt-10 bg-gradient-to-b from-[#121212] via-[#121212] to-[#071630]'>
    <div className='w-screen flex items-center justify-center'>
        <span className='font-black text-[45px]' >See Artists Like</span>
    </div>
    <div className='mt-40 ml-2 flex flex-row gap-20  px-10 items-center justify-evenly'>

    {AristsLike.map(artist => (
        <ArtistCard name={artist.name} link={artist.link} photo={artist.photo}/>
    ))}
    </div>
    <div className='mt-20 w-screen flex items-center justify-center'>
        <span className='font-black text-[30px] mb-40' ></span>
    </div>
</div>


  )
}

export default Artists