import React from 'react'

const Footer = () => {


  return (
               <div className='h-[100px] bg-gradient-to-b from-[#071630] via-[#121212] to-[#121212] flex items-center justify-center'>
                <div className='flex flex-row items-center justify-between w-[1200px]'>
                <div className="flex flex-row items-center">
                    <img
                    src="https://beach-please-web.b-cdn.net/wp-content/uploads/2022/05/Logo-mic-1024x773-1.webp"
                    alt="byflow"
                    className="w-20 h-20 object-contain"
                    />
                    <div className='flex flex-row gap-10 text-sm text-center'>
                    <ul className="flex flex-col ml-10 ">
                      <li className="font-custom text-white">PRIVACY POLICY</li>
                      <li className="font-custom text-white">COOKIE POLICY</li>
                    </ul>
                    <ul className="flex flex-col ml-10">
                      <li className="font-custom text-white">TERMS AND CONDITIONS</li>
                      <li className="font-custom text-white">UNDER 18 DOCUMENTS</li>
                    </ul>
                    </div>
                </div>

                            <div className="text-white flex flex-col justify-center items-end text-end text-xs ">
                                <span className='font-bold'>All rights Reserved</span>
                                <span className='font-bold'>This is a CONCEPT WEBSITE made by <a href="https://media.cristoi.ro" className='text-red-500'>@rocristoi</a></span>
   
                            </div>
                            </div>

               </div>


  )
}

export default Footer