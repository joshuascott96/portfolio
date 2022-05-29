import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'

function Navbar() {
    
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#222629] text-[#6b6e70]'>
        <div>
            <h2 className='mono pl-4 tracking-wide font-bold text-[#eee] text-3xl'>J<span className='text-[#86c232]'>R</span>SCOTT<span className='text-[#86c232]'>.</span></h2>
        </div>

        {/* MENU */}
        <ul className='hidden md:flex h-[80px] mr-4 px-4 items-center '>
            <li><Link to='home' smooth={true} duration={500}><sup>1.</sup>Home</Link></li>
            <li><Link to='about' smooth={true} duration={500}><sup>2.</sup>About</Link></li>
            <li><Link to='skills' smooth={true} duration={500}><sup>3.</sup>Skills</Link></li>
            <li><Link to='work' smooth={true} duration={500}><sup>4.</sup>Work</Link></li>
            <li><Link to='contact' smooth={true} duration={500}><sup>5.</sup>Contact</Link></li>
        </ul>
    
        {/* HAMBURGER */}
        <div onClick={handleClick} className='md:hidden z-10'>
            <div className='border-[#6b6e70] border-[1px] rounded-full cursor-pointer p-3'>
            {!nav ? <FaBars /> : <FaTimes />}
            </div>
        </div>

        {/* MOBILE */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen blur-overlay flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to='about' smooth={true} duration={500}>About</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to='work' smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}  to='contact' smooth={true} duration={500}>Contact</Link></li>   
        </ul>

        {/* SOCIALS */}
        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300 pl-2' href='/' >
                        Instagram <FaInstagram size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300 pl-2' href='/' >
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300 pl-2' href='/' >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                { /*
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300 pl-2' href='/' >
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
                */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar