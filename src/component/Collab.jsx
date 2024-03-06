import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


export default function Collab() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rumcnc4', 'template_mhhzsvc', form.current, {
                publicKey: 'h58SAu3SfQU8mSOQ0',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Contact Form Submitted')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Getting Error')
                },
            );
    };
    return (
        <div>
            <div className=''>
                <div className=''>
                    <div className=''>
                        <div className='grid grid-cols-2 gap-20'>
                            <div className='bg-grayes pl-custom py-8'>
                                <h2 className='productBold text-2xl pt-12'>Let’s collab!</h2>
                                <p className='productregular text-lg pb-6'>Share your details, and let's explore how we can elevate your digital journey together.</p>

                                <form ref={form} onSubmit={sendEmail}>
                                    <input type="text" className='input-title' required placeholder='Full name' name="user_name" />
                                    <input type="email" className='input-title' required placeholder='Email address' name="user_email" />
                                    <div>
                                        <input type='text' className='input-title' name='company_name' required placeholder='Company Name' />
                                    </div>
                                    <textarea className='input-textarea' required placeholder='Message' name="message" />
                                    <input type='submit' className='btn-submit mb-12' value="Send" />
                                </form>


                            </div>
                            <div className='py-8'>

                                <h2 className='productBold text-2xl pt-12'>Want to app, call or email directly?</h2>
                                <p className='productregular text-lg pb-6'>I’ll really happy to answer your all questions.</p>


                                <div className='flex items-center pt-4'>
                                    <div>
                                        <img src='/assets/images/profile.png' alt='' />
                                    </div>
                                    <div className='pl-8'>
                                        <h3 className='productBold text-2xl'>Krishna Agrawal</h3>
                                        <p className='productregular text-xl'>Founder</p>

                                        <p className='productregular text-xl pt-4'>creative@blue.club</p>
                                        <p className='productregular text-xl'>+91 9407824148</p>
                                    </div>
                                </div>

                                <div className='pt-12 flex items-center'>

                                    <button className='btn-linkdein'>
                                        <img src='/assets/images/linkedin1.png' alt='' />
                                        Let’s connect
                                    </button>


                                    <button className='btn-linkdein btn-color  ml-12'>
                                        <img src='/assets/images/whatsapp1.png' alt='' />
                                        Send an app
                                    </button>


                                </div>


                                <div className='pt-20'>
                                    <h2 className='productBold text-3xl pt-12'>View our work here</h2>
                                    <div className='flex mt-2'>
                                        <a href="https://www.behance.net/BlueberrysClub">
                                            <button className='btn-behance'>
                                                Behance
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 14L14 1M14 1V13.48M14 1H1.52" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>

                                        </a>

                                        <a href='https://www.instagram.com/blueb.club'>
                                            <button className='btn-behance'>
                                                Instagram
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 14L14 1M14 1V13.48M14 1H1.52" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </button>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
