import React from 'react'

export default function Footer() {
    return (
        <div className='py-8 pt-20'>
            <div className='container'>
                <div className='lg:grid block grid-cols-3 gap-6'>
                    <div>
                        <img src='/assets/images/Logo.png' alt='' />

                        <p className='pt-8 productregular'>
                            We partner with global startups and  established companies, to deliver  memorable brand identities and  digital experiences.

                        </p>

                        <a className='pt-8 flex items-center productBold'>
                            <svg width="13" height="13" className='mr-1' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.55105 15.6223L8.551 1.83376M8.551 1.83376L15.1695 8.4523M8.551 1.83376L1.93251 8.45226" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <label>Back to top</label>
                        </a>
                    </div>
                    <div>
                        <p className='productregular'>Don’t like the forms? Drop us a line via email.</p>
                        <button className='btn-lets'>

                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <label className='lab-work'>Let’s work together</label>
                        </button>

                        <h3 className='text-xl productBold mt-12'>Subscribe for newsletter.</h3>

                        <form>
                            <div className='newsletter'>
                                <input type='email' placeholder='Enter your email address' />
                                <button>Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <h3 className='productBold text-lg pb-2'>Socials
                            </h3>
                            <ul className='social-list'>
                                <li>
                                    <a href='https://www.instagram.com/blueb.club'>

                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        Instagram
                                    </a>

                                </li>
                                <li>
                                    <a href='#/'>

                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        LinkedIn
                                    </a>

                                </li>
                                <li>
                                    <a href='https://www.behance.net/BlueberrysClub'>

                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        Behance
                                    </a>

                                </li>
                                <li>
                                    <a href='https://dribbble.com/BlueberrysClub'>

                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        Dribbble
                                    </a>

                                </li>
                                <li>
                                    <a href='#/'>

                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        Twitter
                                    </a>

                                </li>
                                <li>
                                    <a href='https://www.facebook.com/blueberrycreativeclub/'>

                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        Facebook
                                    </a>

                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='productBold pb-2'>Sitemap
                            </h3>
                            <ul className='social-list'>
                                <li>
                                    <a href='#/'>Home</a>

                                </li>
                                <li>
                                    <a href='#/'>Portfolio</a>

                                </li>
                                <li>
                                    <a href='#/'>Careers</a>

                                </li>
                                <li>
                                    <a href='#/'>Contacts</a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
