import HeroBackgroundBlur from "../HeroBackground";
import { FEATURE_SERVICE_DATA } from "./featureServiceData";
import logo from "../../assets/logo.svg";

export const FeatureServices = () => {
   return (
      <>
         <section className='py-12 bg-black sm:py-16 lg:py-20 xl:py-24'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
               <div className='max-w-4xl mx-auto text-center'>
                  <img className='w-auto h-20 mx-auto' src={logo} alt='' />

                  <h2 className='mt-8 text-3xl font-normal text-white sm:mt-12  leading-10'>
                     <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold lg:text-5xl xl:text-6xl'>
                        Doc-Chain
                     </span>{" "}
                     is committed to delivering world-class technology solutions
                     that drive business transformation and sustainable growth.
                     Explore our expertise and discover how we can support your
                     digital journey with innovation, security, and seamless
                     integration.
                  </h2>

                  <div className='relative inline-flex items-center justify-center mt-8 sm:mt-12 group'>
                     <div className='absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50'></div>
                     {/* <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-md" role="button"> Get started with 14 days free trial </a> */}
                  </div>
               </div>
            </div>
         </section>
         {FEATURE_SERVICE_DATA.map((service) => {
            return (
               <>
                  <section className='py-12 bg-black sm:py-16 lg:py-20 xl:py-24'>
                     <div className='px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl'>
                        <div className='grid items-center max-w-lg grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24  gap-y-12'>
                           <div
                              className={`order-first ${
                                 service.isImageFirst ? "md:order-last" : ""
                              } `}
                           >
                              <h2 className='text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl'>
                                 {service.title}
                              </h2>
                              <p className='mt-8 text-xl font-normal text-white'>
                                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
                                    {service.glowSubTitle}{" "}
                                 </span>
                                 {service.subTitle}
                              </p>
                              <p className='mt-8 text-lg font-normal text-gray-400'>
                                 {service.description}
                              </p>
                           </div>

                           <div className='relative'>
                              <div className='absolute inset-0'>
                                 <HeroBackgroundBlur />
                              </div>

                              <img
                                 className='relative w-[80%] mx-auto'
                                 src={service.imgSrc}
                                 alt=''
                              />
                           </div>
                        </div>
                     </div>
                  </section>
               </>
            );
         })}
      </>
   );
};
