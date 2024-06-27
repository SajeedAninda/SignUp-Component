import React, { useState } from 'react';

const FormComponent = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [emailError, setEmailError] = useState(null);

    const handleForm = (e) => {
        e.preventDefault();

        const first_name = e.target.firstName.value;
        const last_name = e.target.lastName.value;
        const email_address = e.target.email.value;
        const password = e.target.password.value;

        if (!first_name) {
            setFirstName("First Name cannot be empty");
        } else {
            setFirstName(null);
        }

        if (!last_name) {
            setLastName("Last Name cannot be empty");
        } else {
            setLastName(null);
        }

        if (!email_address) {
            setEmail("Email cannot be empty");
        } else if (!validateEmail(email_address)) {
            setEmail(null);
            setEmailError("Looks like this is not an email");
        } else {
            setEmail(null);
            setEmailError(null);
        }

        if (!password) {
            setPass("Password cannot be empty");
        } else {
            setPass(null);
        }
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    return (
        <div>
            <div className='w-full text-center py-4 rounded-lg bg-[#6055A5] shadow-custom'>
                <p className='text-white '>
                    <span className='font-bold'>Try it free 7 days </span>
                    then $20/mo. thereafter
                </p>
            </div>

            <div className='w-full px-7 py-8 mt-6 rounded-lg bg-white shadow-custom'>
                <form onSubmit={handleForm}>
                    <div>
                        <input
                            className='border border-gray-300 rounded-md py-3 px-6 w-full font-bold text-gray-800 text-[14px]'
                            type="text"
                            name="firstName"
                            placeholder='First Name'
                            onChange={() => setFirstName(null)}
                        />
                        {firstName && <p className='text-[#FF7A7A] italic text-[12px] mt-1 text-right'>{firstName}</p>}
                    </div>

                    <div>
                        <input
                            className='border border-gray-300 rounded-md py-3 px-6 w-full font-bold text-gray-800 mt-3 text-[14px]'
                            type="text"
                            name="lastName"
                            placeholder='Last Name'
                            onChange={() => setLastName(null)}
                        />
                        {lastName && <p className='text-[#FF7A7A] italic text-[12px] mt-1 text-right'>{lastName}</p>}
                    </div>

                    <div>
                        <input
                            className='border border-gray-300 rounded-md py-3 px-6 w-full font-bold text-gray-800 mt-3 text-[14px]'
                            type="email"
                            name="email"
                            placeholder='Email Address'
                            onChange={() => {
                                setEmail(null);
                                setEmailError(null);
                            }}
                        />
                        {email && <p className='text-[#FF7A7A] italic text-[12px] mt-1 text-right'>{email}</p>}
                        {emailError && <p className='text-[#FF7A7A] italic text-[12px] mt-1 text-right'>{emailError}</p>}
                    </div>

                    <div>
                        <input
                            className='border border-gray-300 rounded-md py-3 px-6 w-full font-bold text-gray-800 mt-3 text-[14px]'
                            type="password"
                            name="password"
                            placeholder='Password'
                            onChange={() => setPass(null)}
                        />
                        {pass && <p className='text-[#FF7A7A] italic text-[12px] mt-1 text-right'>{pass}</p>}
                    </div>

                    <button
                        className='w-full text-[14px] py-3 px-4 bg-[#38CC8C] hover:bg-[#70dfaf] rounded-md text-white mt-3 shadow-custom2'
                        type='submit'
                    >
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
