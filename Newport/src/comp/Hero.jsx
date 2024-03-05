import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='bg-black'>
        <div className="md:grid md:grid-cols-2">
            <div className='md:flex flex-col text-white justify-center bg-black h-96 md:ml-20'>
                <h6 className='text-yellow-500 md:ml-20 mb-3'>HELLO !</h6>
                <h1 className='md:ml-20 font-bold text-6xl mb-5'>I'm <span className='text-yellow-500'>Clark<br />Thompson</span></h1>
                <h2 className='md:ml-20 text-2xl'> A Freelance Web Designer</h2>
                <div className='md:mt-2 md:ml-20 space-x-5'>
                <button class="rounded-3xl text-sm font-bold h-10 text-black bg-yellow-500 w-20  mt-5">HIRE ME</button>           
                <button class="rounded-3xl  text-sm font-bold h-10 text-white border border-zinc-200 w-32 mt-5">MY WORKS</button>  
                </div>       
                 </div>
            <div>
                <img className='h-auto md:mt-20' src="./public/img/man2.png" alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero