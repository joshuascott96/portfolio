
function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#222629] flex justify-center items-center p-8'>
        <form method='POST' action='https://getform.io/f/170646d7-cd35-48b0-8cb2-dd4d0561771c' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center'>
                <p className='mono text-4xl font-bold inline text-[#fff]'>Contact Me</p>
                <p className='text-[#95989a] py-4'>Submit the form below to get in touch with me!</p>
            </div>
            <input type='text' placeholder='Name' name='name' className='p-2' />
            <input type='email' placeholder='Email' name='email' className='my-4 p-2' />
            <textarea name='message' rows='10' placeholder='Message' className='p-2'></textarea>
            <button className='mono text-[#86c232] border-[#86c232] border-[1px] px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#86c232] hover:text-[#222629] duration-200'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact