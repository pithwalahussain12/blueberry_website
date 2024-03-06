import React, { useRef } from 'react'
import Header from '../component/Header'
import Footer2 from '../component/footer2'
import emailjs from '@emailjs/browser';


export default function Startintake() {
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
            <Header />
            <a href="mailto:creative@blueb.club">

                <button className='btn-email'>
                    <a href="mailto:creative@blueb.club" className='!flex items-center'>

                        <svg width="10" height="10" className='mr-2' viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.11108 9.19469L8.69439 1.61133M8.69439 1.61133V8.89135M8.69439 1.61133H1.41442" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <label className='block'>creative@blueb.club</label>
                    </a>
                </button>
            </a>
            <div className='mt-20'>
                <div className=''>
                    <div className='grid grid-cols-2 gap-20'>
                        <div className='lg:pl-[10%] lg:w-[600px]'>
                            <h2 className='productBold text-2xl pt-12'>Acquainted?</h2>
                            <p className='productregular text-lg pb-6'>Enter your details here and you will be in touch with one of our professionals in no time for an intake!</p>

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
                        <div className='bg-grayes lg:pr-[10%]'>
                            <h2 className='productBold text-2xl pt-12'>What do you like to drink?</h2>
                            <p className='productregular text-lg pb-6'>The difference is in small details.</p>

                            <ul className='list-cofee'>
                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/koffie.png' alt='' />
                                    <label>Coffee</label>
                                </li>
                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/cappuccino.png' alt='' />
                                    <label>Cappuccino</label>
                                </li>
                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/espresso.png' alt='' />
                                    <label>Espresso
                                    </label>
                                </li>
                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/tea.png' alt='' />
                                    <label>Thee
                                    </label>
                                </li>

                            </ul>

                            <ul className='list-cofee pt-8'>

                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/beer.png' alt='' />
                                    <label>Beer</label>
                                </li>

                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/water.png' alt='' />
                                    <label>Water
                                    </label>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}
