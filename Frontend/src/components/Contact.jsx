import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { useForm } from "react-hook-form";
import contactus from "../assets/contactus.png"
function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
   const image = ( 
        '../assets/contact us.png'
    )
    return (
        <>
            <Navbar />
           
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className=' order-2 md:order-1 mt-6 md:mt-32 w-full md:w-1/2 '>
                    <h1 className='font-bold text-4xl '>Contact Us</h1>

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='mt-2 space-y-3'>
                            <span> Name</span>
                            <br />
                            <input {...register("name", { required: true })} className='w-90 py-1 px-3 border rounded-md outline-none' type="text" placeholder='Enter your full name' />
                            <br />
                            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className='mt-2 space-y-3'>
                            <span>Email</span>
                            <br />
                            <input {...register("email", { required: true })} className='py-1 w-90 px-3 border rounded-md outline-none' type="email" placeholder='Enter your email' />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className='mt-2 space-y-3'>
                            <span>Message</span>
                            <br />
                            <textarea {...register("message", { required: true })}
                                placeholder="Enter your Message"
                                className="outline-none textarea textarea-bordered textarea-md w-full max-w-xs"></textarea>
                            <br />
                            {errors.message && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className='mt-3 '>
                            <button className='cursor-pointer px-2 py-1 border rounded-md hover:bg-pink-800 text-white bg-pink-500 duration-300 transition-all ' type='submit' >Submit</button>

                        </div>
                    </form>

                </div>
            
            <div className='order-1 w-full md:w-1/2 mt-12'>
            <img className=' h-92 w-92' src={contactus}/>
            </div>
            </div>
            <Footer />
       
        </>
    )
}

export default Contact