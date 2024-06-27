import React from 'react';
import "./login.css";
import TextComponent from './TextComponent';

const LoginPage = () => {
    return (
        <div className='body h-[100vh]'>
            <div className='w-[70%] h-full flex justify-center items-center'>
                <div className='w-[50%]'>
                    <TextComponent></TextComponent>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;