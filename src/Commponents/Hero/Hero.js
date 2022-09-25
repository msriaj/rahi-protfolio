import React from 'react';
import HeroText from '../HeroText/HeroText';
import Menu from '../Menu/Menu';
import heroImg from './hero.png'
const Hero = () => {
    return (
        <section className='bg-[#222222] h-screen '>
            <Menu />
            <div className='flex items-center w-10/12 text-white mx-auto justify-between py-10'>
                <HeroText></HeroText>
                <div className='w-1/2 flex justify-center'>
                    <img className='w-96' src={heroImg} alt="" />
                </div>
            </div>
        </section>
    );
};
export default Hero;