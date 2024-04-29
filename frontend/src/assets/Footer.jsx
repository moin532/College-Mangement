import React from 'react'

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footere = () => {
  return (
    
    <footer className="bg-gray-800 text-white pt-10 sm:mt-10">
    <div>
             <Footer.Title
               title="SRS First Grade College"
              className=' text-4xl underline'
            />
          </div>
    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap underline justify-between">
      {/* About Section */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className=" uppercase text-gray-400 font-medium text-5xl mb-6">About</div>
        <a href="#" className="my-3 text-white text-2xl block">Our Company <span className="text-white  text-xs p-1"></span></a>
        <a href="#" className="my-3 text-white text-2xl block">Privacy Policy <span className="text-white  text-xs p-1"></span></a>
        <a href="#" className="my-3 text-white text-2xl block">Terms of Service <span className="text-white text-xs p-1"></span></a>
      </div>

      {/* Links Section */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className=" uppercase text-gray-400 font-medium text-4xl mb-6">Links</div>
        <a href="#" className="my-3  text-white text-2xl block">Blog <span className="text-teal-600 text-xs p-1"></span></a>
        <a href="#" className="my-3 text-white text-2xl  block">Contact Us <span className="text-teal-600 text-xs p-1"></span></a>
        <a href="#" className="my-3 text-white text-2xl  block">FAQ <span className="text-teal-600 text-xs p-1"></span></a>
      </div>

      {/* Contact Section */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <div className="uppercase text-gray-400 font-medium text-5xl mb-6">Contact</div>
        <a href="#" className="my-3 text-white  text-1xl block">Email: moinmisba@gmail.com <span className="text-teal-600 text-xs p-1"></span></a>
        <a href="#" className="my-3 text-white  text-1xl block">Phone: +91 96067-42371 <span className="text-teal-600 text-xs p-1"></span></a>
      </div>
    </div>

    <div className="pt-2">
      <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
        <div className="mt-2 text-white ">© {new Date().getFullYear()} Company Name. All Rights Reserved.</div>
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
         
           <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center  pr-44 ">
             <Footer.Icon icon={BsDribbble} className='text-white text-4xl pr-48' />
             <Footer.Icon href="#" icon={BsFacebook} className='text-white text-4xl '/>
             <Footer.Icon href="https://www.instagram.com/m__m__07x/?igshid=MzNlNGNkZWQ4Mg%3D%3D"  icon={BsInstagram} className='text-white text-4xl'/>
             <Footer.Icon href="#" icon={BsTwitter} className='text-white text-4xl'/>
             <Footer.Icon href="https://github.com/moin532" icon={BsGithub} className='text-white text-4xl'/>
           </div>
        </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footere
