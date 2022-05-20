import WorkImg from '../assets/workImg.jpeg'

function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#1a1d1f]'>
        <div className='max-w-[1000px] mx-auto px-8 py-16 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline text-[#fff] mono'>Work</p>
                <p className='py-4 text-[#95989a]'>Check out some of my recent work!</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                 style={{backgroundImage: `url(${WorkImg})`}}
                 className='group container flex justify-center items-center mx-auto content-div'>
                    <div className='mono text-center text-[#86c232] opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                            Coming Soon
                        </span>
                        <div className='pt-8'>
                            <a href='/'>
                                <button className='text-center px-5 py-3 m-2 border-[#86c232] border-[1px] hover:bg-[#86c232] hover:text-[#222629] duration-200'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center px-5 py-3 m-2 border-[#86c232] border-[1px] hover:bg-[#86c232] hover:text-[#222629] duration-200'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                 style={{backgroundImage: `url(${WorkImg})`}}
                 className='group container flex justify-center items-center mx-auto content-div'>
                    <div className='mono text-center text-[#86c232] opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                            Coming Soon
                        </span>
                        <div className='pt-8'>
                            <a href='/'>
                                <button className='text-center px-5 py-3 m-2 border-[#86c232] border-[1px] hover:bg-[#86c232] hover:text-[#222629] duration-200'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center px-5 py-3 m-2 border-[#86c232] border-[1px] hover:bg-[#86c232] hover:text-[#222629] duration-200'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                 style={{backgroundImage: `url(${WorkImg})`}}
                 className='group container flex justify-center items-center mx-auto content-div'>
                    <div className='mono text-center text-[#86c232] opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                            Coming Soon
                        </span>
                        <div className='pt-8'>
                            <a href='/'>
                                <button className='text-center px-5 py-3 m-2 border-[#86c232] border-[1px] hover:bg-[#86c232] hover:text-[#222629] duration-200'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center px-5 py-3 m-2 border-[#86c232] border-[1px] hover:bg-[#86c232] hover:text-[#222629] duration-200'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work