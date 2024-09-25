/* eslint-disable react/prop-types */
const Title = ({ title, tagLine, id }) => {
   return (
      <section className='py-6 bg-black  sm:py-16 lg:py-16 ' id={id}>
         <div className=' mx-auto  py-16 max-w-4xl'>
            <div className=' mx-auto text-center'>
               <h2 className='text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl'>
                  {title}
               </h2>
               <p className='mt-6 text-lg font-normal text-gray-400'>
                  {tagLine}
               </p>
            </div>
         </div>
      </section>
   );
};

export default Title;
