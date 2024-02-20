import React from 'react'

export default function Footer2() {
    return (
        <div className='footer-bg pt-10'>
            <div className='container'>
                <div>
                    <div className='lg:grid block lg:grid-cols-3'>
                        <div className='col-span-2'>
                            <p className='productBold text-xl'>Let's Talk</p>
                            <h1 className='productBold text-4xl pt-4 underline'>
                                <a>
                                    creative@blueb.club
                                </a>
                            </h1>

                            <div className='py-10'>
                                <h3 className='productregular'>Job Applications
                                </h3>
                                <p className='productBold'>
                                    enquiry@blueb.club






                                </p>
                            </div>
                            <div>
                                <h3 className='productBold text-xl'>Join us and Suscribe to our Newsletter!</h3>
                                <form className='relative lg:w-[500px]'>
                                    <input type='email' className='email-type' placeholder='Email Address' />
                                    <div className='absolute top-6 right-2'>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00032 12.8478L21.613 12.8478" stroke="#F7F7F7" stroke-width="1.53425" stroke-linecap="square" stroke-linejoin="round"></path><path d="M11.8486 2L22.6974 12.8488L11.8486 23.6975" stroke="#F7F7F7" stroke-width="1.53425" stroke-linecap="square"></path></svg>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h1 className='productBold lg:text-[190px] mt-10'>Blueberry.</h1>
                            </div>
                        </div>

                        <div >
                            <div className='grid grid-cols-2'>

                                <div>
                                    <ul className='social-list-1'>
                                        <li>
                                            <a href='https://www.behance.net/BlueberrysClub'>Behance</a>

                                        </li>
                                        <li>
                                            <a href='https://www.instagram.com/blueb.club'>Instagram</a>

                                        </li>
                                        <li>
                                            <a href=''>Twitter</a>
                                        </li>
                                        <li>
                                            <a href=''>Linkdein</a>
                                        </li>
                                        <li>
                                            <a href='https://www.facebook.com/blueberrycreativeclub/'>Facebook</a>
                                        </li>
                                    </ul>

                                </div>
                                <div>
                                    <ul className='list-soci-sec'>
                                        <li>
                                            <a href='/'>Home</a>

                                        </li>
                                        <li>
                                            <a href='/contact'>Contact</a>

                                        </li>
                                        <li>
                                            <a href='start'>Start In Take</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
