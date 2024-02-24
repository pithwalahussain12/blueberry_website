import React from 'react'
import SubscribeForm from './subscribeForm'

export default function Footer2() {
    return (
        <div className='footer-bg pt-10 relative'>
            <div className='container'>
                <div>
                    <div className='lg:grid block lg:grid-cols-3'>
                        <div className='col-span-2'>
                            <p className='productBold text-xl'>Let's Talk</p>
                            <h1 className='productBold text-4xl pt-4 value-bg'>
                                <a href="mailto:creative@blueb.club">
                                    creative@blueb.club
                                </a>
                            </h1>

                            <div className='py-14'>
                                <h3 className='productregular'>Job Applications
                                </h3>
                                <p className='productBold'>
                                    <a href="mailto:enquiry@blueb.club" className='cursor-pointer'>
                                        enquiry@blueb.club
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h3 className='productBold text-xl'>Join us and Subscribe to our Newsletter!</h3>
                                {/* <form className='relative lg:w-[500px]'>
                                    <input type='email' className='email-type' placeholder='Email Address' />
                                    <div className='absolute top-6 right-2'>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00032 12.8478L21.613 12.8478" stroke="#F7F7F7" stroke-width="1.53425" stroke-linecap="square" stroke-linejoin="round"></path><path d="M11.8486 2L22.6974 12.8488L11.8486 23.6975" stroke="#F7F7F7" stroke-width="1.53425" stroke-linecap="square"></path></svg>
                                    </div>
                                </form> */}

                                {/* <SubscribeForm /> */}

                                <div id="mc_embed_shell">
                                    <link
                                        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
                                        rel="stylesheet"
                                        type="text/css"
                                    />

                                    <div id="mc_embed_signup">
                                        <form
                                            action="https://braininventory.us18.list-manage.com/subscribe/post?u=7e97dae83f33469d8fb514ae6&id=80268eefe3&f_id=00d1cbe0f0"
                                            method="post"
                                            id="mc-embedded-subscribe-form"
                                            name="mc-embedded-subscribe-form"
                                            className='validate relative lg:w-[500px]'
                                            target="_blank"
                                        >
                                            <div id="mc_embed_signup_scroll">
                                                <div className="mc-field-group">
                                                    {/* <label htmlFor="mce-EMAIL">
                                                        Email Address <span className="asterisk">*</span>
                                                    </label> */}
                                                    <input
                                                        type="email"
                                                        name="EMAIL"
                                                        className='email-type required email' placeholder='Email Address'
                                                        id="mce-EMAIL"
                                                        required=""
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div id="mce-responses" className="clear foot">
                                                    <div
                                                        className="response"
                                                        id="mce-error-response"
                                                        style={{ display: "none" }}
                                                    />
                                                    <div
                                                        className="response"
                                                        id="mce-success-response"
                                                        style={{ display: "none" }}
                                                    />
                                                </div>
                                                <div
                                                    aria-hidden="true"
                                                    style={{ position: "absolute", left: "-5000px" }}
                                                >
                                                    <input
                                                        type="text"
                                                        name="b_7e97dae83f33469d8fb514ae6_80268eefe3"
                                                        tabIndex={-1}
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div className="optionalParent">

                                                    <div className="clear foot">

                                                        <div className='absolute top-6 right-2'>
                                                            <input
                                                                type="submit"
                                                                name="subscribe"
                                                                id="mc-embedded-subscribe"
                                                                className="button opacity-0	"
                                                                defaultValue="Subscribe"
                                                            />
                                                            <svg width="24" className='absolute top-0 right-6' height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00032 12.8478L21.613 12.8478" stroke="#F7F7F7" stroke-width="1.53425" stroke-linecap="square" stroke-linejoin="round"></path><path d="M11.8486 2L22.6974 12.8488L11.8486 23.6975" stroke="#F7F7F7" stroke-width="1.53425" stroke-linecap="square"></path></svg>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <h1 className='productBold absolute bottom-0 lg:text-[200px] mt-10'>Blueberry.</h1>
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
                                            <a href='https://twitter.com/BlueberrysClub'>Twitter</a>
                                        </li>
                                        <li>
                                            <a href='https://www.linkedin.com/company/blueberrys-club
'>Linkedin</a>
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
