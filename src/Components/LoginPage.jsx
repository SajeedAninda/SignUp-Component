import React from 'react';
import "./login.css";
import TextComponent from './TextComponent';
import FormComponent from './FormComponent';

const LoginPage = () => {
    return (
        <div className='body h-[100vh]'>
            <div className='w-[70%] mx-auto h-full flex gap-8 justify-center items-center'>
                <div className='w-[50%]'>
                    <TextComponent></TextComponent>
                </div>

                <div className='w-[50%]'>
                    <FormComponent></FormComponent>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;