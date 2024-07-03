import React from 'react'
import Login from './login';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className='w-[600px]'>
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        {/* if there is a button in form, it will close the modal */}
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-3">✕</Link>

                        <h3 className='font-bold text-lg'>Sign Up</h3>
                        <div className='mt-2 space-y-3'>
                            <span>Full Name</span>
                            <br />
                            <input {...register("fullname", { required: true })} className='w-90 px-3 border rounded-md outline-none' type="text" placeholder='Enter your full name' />
                            <br />
                            {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className='mt-2 space-y-3'>
                            <span>Email</span>
                            <br />
                            <input {...register("email", { required: true })} className='w-90 px-3 border rounded-md outline-none' type="email" placeholder='Enter your email' />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className='mt-2 space-y-3'>
                            <span>Password</span>
                            <br />
                            <input {...register("password", { required: true })} className='w-90 px-3 border rounded-md outline-none' type="password" placeholder='Enter your Password' />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>
                        <div className='mt-3 flex justify-around '>
                            <button className='cursor-pointer px-2 py-1 border rounded-md hover:bg-pink-800 text-white bg-pink-500 duration-300 transition-all ' type='submit' >Sign Up</button>
                            <p>Have an account? <span onClick={() => {
                                document.getElementById("my_modal_3").showModal();
                            }} className='underline text-blue-500'>Login</span> </p>
                            <Login />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup