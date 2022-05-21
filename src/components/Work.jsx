import WorkImg from '../assets/workImg.jpeg'

function Work() {
  return (
    <div name='work' className='w-full md:h-screen bg-dark pt-10'>
        <div className='max-w-[1000px] mx-auto px-8 py-16 flex flex-col justify-center h-full'>
            <div className='pb-8 text-center'>
                <p className='page-title'>Work</p>
                <p className='page-subtitle'>Check out some of my recent work!</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div 
                 style={{backgroundImage: `url(${WorkImg})`}}
                 className='group container flex justify-center items-center mx-auto content-div'>
                    <div className='mono text-center text-[#86c232] opacity-0 group-hover:opacity-100'>
                        <span className='work-title'>
                            Coming Soon
                        </span>
                        <div className='pt-8'>
                            <a href='/'>
                                <button className='btn-primary m-2'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='btn-primary m-2'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                 style={{backgroundImage: `url(${WorkImg})`}}
                 className='group container flex justify-center items-center mx-auto content-div'>
                    <div className='mono text-center text-[#86c232] opacity-0 group-hover:opacity-100'>
                        <span className='work-title'>
                            Coming Soon
                        </span>
                        <div className='pt-8'>
                            <a href='/'>
                                <button className='btn-primary m-2'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='btn-primary m-2'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                 style={{backgroundImage: `url(${WorkImg})`}}
                 className='group container flex justify-center items-center mx-auto content-div'>
                    <div className='mono text-center text-[#86c232] opacity-0 group-hover:opacity-100'>
                        <span className='work-title'>
                            Coming Soon
                        </span>
                        <div className='pt-8'>
                            <a href='/'>
                                <button className='btn-primary m-2'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='btn-primary m-2'>Code</button>
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