import React from 'react';
import './Contact.css'
// import contact from '../../image/page/contact.jpg'

const Contact = () => {
    return (
        <div>
            <div className="contact-image">
                <div className=' md:ml-8 ml-2 backdrop-blur-sm'>
                    <h1 className='text-white text-5xl font-bold'>Get in touch</h1>
                    <p className='text-white text-xl font-mono p-2 md:w-1/2 mt-6'>If you have and problem contact us. Or if you have any quary touch us or sent email. Thank you very much.</p>
                </div>
            </div>
            {/* address section */}
            <section className='mb-8'>
                <div className="grid lg:grid-rows-3 md:grid-rows-2 gap-x-30 mt-8 ml-8 md:grid-flow-col">
                    <div className='row-span-3 font-bold text-3xl tracking-wide	 font-mono'>Location</div>
                    <div className='row-span-3'>
                        <div className='mb-3'>
                            <h1 className='text-xl font-semibold'>Bangladesh</h1>
                            <p className='text-neutral-400	'>1230 Dhaka-Uttara</p>
                            <p className='text-neutral-400	'>Road-10, Sector-10</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Toronto</h1>
                            <p className='text-neutral-400	'>7363 Cynthia Pass</p>
                            <p className='text-neutral-400	'>Toronto, ON N3Y 4H8</p>
                        </div>
                    </div>
                    <div className='row-span-3 mb-2'>
                        <div className='mb-3'>
                            <h1 className='text-xl font-semibold'>New York</h1>
                            <p className='text-neutral-400	'>889 Walter Streets</p>
                            <p className='text-neutral-400	'>New York, NY 12345</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Chicago</h1>
                            <p className='text-neutral-400	'>726 Mavis Island</p>
                            <p className='text-neutral-400	'>Chicago, IL 60601</p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            {/* get in touch */}
            <section className='mt-2 mb-8'>
                <div className="grid lg:grid-rows-3 md:grid-rows-2 gap-x-30 mt-8 ml-8 md:grid-flow-col">
                    <div className='row-span-2 tracking-tighter	 font-bold text-3xl font-mono'>Get touch</div>
                    <div className='row-span-3'>
                        <div className='mb-3'>
                            <h1 className='text-xl font-semibold'>Collaborate</h1>
                            <p className='text-neutral-400	'>eucation@iubat.edu</p>
                            <p className='text-neutral-400	'>+880 0965256314</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Join our team</h1>
                            <p className='text-neutral-400	'>education@iubat.edu</p>
                            <p className='text-neutral-400	'>+880 0965256314</p>
                        </div>
                    </div>
                    <div className='row-span-3'>
                        <div className='mb-3'>
                            <h1 className='text-xl font-semibold'>Press</h1>
                            <p className='text-neutral-400	'>education@iubat</p>
                            <p className='text-neutral-400	'>+880 0965256314</p>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Say hello</h1>
                            <p className='text-neutral-400	'>education@iubat</p>
                            <p className='text-neutral-400	'>+880 0965256314</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* notify me */}
            <section className='mb-3'>
                <div className="grid xl:grid-rows-3 xl:gap-x-30 mt-8 lg:mx-8 mx-6 pl-2 lg:grid-flow-col lg:place-items-center lg:gap-x-40 bg-cyan-800 rounded-3xl lg:p-5 p-3">
                    <div className="lg:row-span-3 mx-auto ml-5">
                        <h1 className='text-white md:text-[30px] text-[20px] w-auto font-semibold'>Sign up for our Newsletter</h1>
                        <p className='text-gray-300 md:text-xl md:w-[450px]'>Get notified about the latest career insights, study tips, and offers at Leverage Edu.</p>
                    </div>
                    <div className="xl:row-span-3 mt-5 ml-5 xl:mx-auto lg:mt-5 ">
                        <div className='sm:flex'>
                            <input type="text" placeholder='Enter your email' className='focus:outline-none focus:ring focus:border-blue-500 mr-3 sm:mr-0 p-3.5 rounded' />
                            <button className='outline-none rounded mt-3 sm:mt-0  bg-green-500 place-items-center p-3  sm:ml-3 text-white text-xl'>Notify me</button>
                        </div>
                        <p className='text-gray-300 text-lg'>We are care about the protection of your data. Read our <span className='underline-offset-2'>Privact Policy.</span></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;