
function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#1a1d1f] text-[#6b6e70]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='m-w-[1000px] w-full px-8 sm:text-center'>
                <p className='text-5xl font-bold inline mono tracking-wide text-[#fff]'>Who am I?</p>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8 pt-2'>
                <div className='sm:text-right text-4xl font-bold text-[#95989a]'>
                    <p>Hi, I'm Joshua, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>I am passionate about learning and developing my knowledge simulataneously with the Web 3.0 space. 
                        I aspire to specialise in ReactJS, popular Web3.0 language Solidity and various frameworks
                        that are required to build and deploy dApps to the Blockchain.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About