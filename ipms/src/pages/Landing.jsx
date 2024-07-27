import React from 'react'
import '../styles/Landing.css'
import Search from '../components/Search'
import FeaturedCard from './../components/FeaturedCard';
import FeaturedAuthor from '../components/FeaturedAuthors';

function Landing() {
  return (
    <>
    <div className='w-full'>
      <div className='landing'>
          <div className='flex justify-center items-center h-full text-white flex-col'>
              <h1 className='font-saira text-[2.25rem]'>Search</h1>
              <h1 className='font-saira text-[1.125rem]'>with</h1>
              <h1 className='font-saira  text-[3.5rem]'>IPMS Digital Library</h1>
              <Search/>
              
          </div>
      </div>
      <div className='container mx-auto font-saira mt-5 px-5'>
          <h1 className=' text-5xl mb-5'>Featured Article</h1>
          <div className=' grid grid-cols-4 gap-5'>
           
          <FeaturedCard text="Dual-Band Dual-Polarized Planar Antenna for 5G Millimeter-Wave Antenna-in-Package Applications" image="assets/demo-feature-pic.png"/>

          <FeaturedCard text="Dual-Band Dual-Polarized Planar Antenna for 5G Millimeter-Wave Antenna-in-Package Applications" image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"/>

          <FeaturedCard text="Dual-Band Dual-Polarized Planar " image="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"/>

          <FeaturedCard text="Dual-Band Dual-Polarized Planar Antenna for 5G Millimeter-Wave Antenna-in-Package Applications" image="https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg"/>
            
          </div>
      </div>
      <div>
        <div className='container mx-auto font-saira mt-5 px-5'>
            <h1 className=' text-5xl mb-5'>Featured Authors</h1>
            <div className=''>
            <div className=' grid grid-cols-4 gap-5 '>
            
             <FeaturedAuthor text="Master of Smile" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"/>
             
             <FeaturedAuthor text="Master of Smile" image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"/>

              <FeaturedAuthor text="Master of Smile" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"/>

              <FeaturedAuthor text="Master of Smile" image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"/>
              
            </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing