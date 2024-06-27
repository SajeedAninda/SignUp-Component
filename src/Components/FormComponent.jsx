import React from 'react';

const FormComponent = () => {
    return (
        <div>
            <div className='w-full text-center py-4 rounded-lg bg-[#6055A5] shadow-custom'>
                <p className='text-white '>
                    <span className='font-bold'>Try it free 7 days </span>
                    then $20/mo. thereafter
                </p>
            </div>

            <div className='w-full px-7 py-8 mt-6 rounded-lg bg-white shadow-custom'>
                <form>
                    <input className='border border-gray-300 rounded-md py-3 px-6 w-full font-bold text-gray-800 text-[14px]' type="text" name="firstName" placeholder='First Name' />

                    <input className='border border-gray-300 rounded-md py-3 px-6 w-full font-bold text-gray-800 mt-3 text-[14px]' type="text" name="lastName" placeholder='Last Name' />

                    <input className='border border-gray-300 rounded-md py-3 px-6 w-full font-bold text-gray-800 mt-3 text-[14px]' type="email" name="email" placeholder='Email Address' />

                    <input className='border border-gray-300 rounded-md py-3 px-6 w-full font-bold text-gray-800 mt-3 text-[14px]' type="password" name="password" placeholder='Password' />

                    <button className='w-full text-[14px] py-3 px-4 bg-[#38CC8C] hover:bg-[#70dfaf] rounded-md text-white mt-3 shadow-custom2' type='submit'>
                        CLAIM YOUR FREE TRIAL
                    </button>
                </form>

                <p className='text-gray-400 text-[12px] text-center mt-3'>
                    By clicking the button, you are agreeing to our <span className='text-[#FF7A7A] hover:underline font-bold'>Terms and Services</span>
                </p>
            </div>
        </div>
    );
};

export default FormComponent;