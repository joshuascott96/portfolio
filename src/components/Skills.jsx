import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Html from '../assets/html.png'

function Skills() {
  return (
    <div name='skills' className='bg-[#222629] h-screen'>
        <div className='max-w-[1000px] mx-auto px-8 py-16 text-center flex flex-col justify-center w-full h-full tracking-wide'>
            <div>
                <p className='text-4xl font-bold mono text-[#fff]'>Experience</p>
                <p className='py-4 text-[#95989a]'>These are the technologies i am working with</p>
            </div>

            <div className='w-full mono grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-[#6b6e70]'>
                <div>
                    <img className='w-20 mx-auto' src={Html} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML Icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div>
                    <img className='w-20 mx-auto' src={Javascript} alt="HTML Icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML Icon" />
                    <p className='my-4'>ReactJS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills