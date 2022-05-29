
function Contact() {
  return (
    <div name='contact' className='page bg-light flex items-center p-8'>
        <form method='POST' action='https://getform.io/f/170646d7-cd35-48b0-8cb2-dd4d0561771c' className='flex flex-col max-w-[600px] w-full text-[#fff]'>
            <div className='pb-8 text-center'>
                <p className='page-title'>Contact Me</p>
                <p className='page-subtitle'>Submit the form below to get in touch with me!</p>
            </div>
            <input type='text' placeholder='Name' name='name' className='rounded p-2 bg-dark form-focus'/>
            <input type='email' placeholder='Email' name='email' className='rounded my-4 p-2 bg-dark form-focus'/>
            <textarea name='message' rows='10' placeholder='Message' className='rounded p-2 bg-dark form-focus'></textarea>
            <button className='btn-primary my-8 mx-auto'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact