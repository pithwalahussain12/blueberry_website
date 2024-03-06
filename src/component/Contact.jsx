import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
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
        <div className='py-20'>
            <div className='container'>
                <div className='lg:grid block grid-cols-2 gap-4'>
                    <div>
                        <h1 className='text-6xl productBold'>
                            We would love to <br /> hear from you.
                        </h1>
                        <p className='pt-6 productregular text-lg w-96'>
                            Feel free to reach out if y`ou want to Collaborate
                            with us, or simply have a chat.
                        </p>
                    </div>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" className='input-title' required placeholder='Full name' name="from_name" />
                            <input type="email" className='input-title' required placeholder='Email address' name="from_email" />
                            <div>
                                <input type='text' className='input-title' name='company_name' required placeholder='Company Name' />
                            </div>
                            <textarea className='input-textarea' required placeholder='Message' name="message" />
                            <input type='submit' className='btn-submit' value="Send" />
                        </form>
                        {/* <form>
                            <div>
                                <input type='text' className='input-title' required placeholder='Full name' />
                            </div>
                            <div>
                                <input type='email' className='input-title' required placeholder='Email address' />
                            </div>
                          
                            <div>
                                <textarea type='text' className='input-textarea' required placeholder='Message'></textarea>
                            </div>
                            <div>
                                <button type='submit' className='btn-submit'>Submit</button>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
