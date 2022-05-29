import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name='home' className='page bg-light'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#86c232] pb-2'>Hello, my name is...</p>
            <h1 className='page-title text-5xl sm:text-7xl pb-1'>Joshua Scott</h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#6b6e70] mono'>I am a Web3 Developer</h2>
            <p className='text-[#6b6e70] py-4 max-w-[700px]'>I am an aspiring <span className='font-bold'>Web 3.0 front-end developer.</span> Currently, my focus is mastering the skill of ReactJS.
                On completion i will transition to learning <span className='font-bold'>Solidity</span>, with a desire to combine the two languages, amongst various frameworks, to create beautiful dApps.
            </p>
            <div className='flex justify-between '>
                <Link to='work' smooth={true} duration={500}>
                    <button className='btn-primary my-2 flex items-center'>
                        View Work<HiArrowNarrowRight className='ml-3' />
                    </button>
                </Link>
                <Link to='contact' smooth={true} duration={500}>
                    <button className='btn-secondary my-2 flex'>
                        Contact Me
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home