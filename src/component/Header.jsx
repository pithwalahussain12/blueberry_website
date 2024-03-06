import React from 'react'

export default function Header() {
    return (
        <div data-fixed  className='header-blurry py-4 fixed top-0 left-0 right-0'>
            <header>
                <div className='container'>
                    <div className='flex justify-between items-center list-section'>
                        {/* <div className='logo-main py-4 ml-2'> */}
                        <a href='/' className=''>
                            <img src='/assets/images/Logo.png' alt='' />
                        </a>

                        <a href='/contact' className='xl:text-lg 2xl:text-2xl max-2xl:text-5xl'>
                            Contacts
                        </a>

                        <a href='/expertises' className='xl:text-lg 2xl:text-2xl max-2xl:text-5xl'>
                            Expertise
                        </a>

                        <a href='/portfolios' className='xl:text-lg 2xl:text-2xl max-2xl:text-5xl'>
                            Portfolio
                        </a>

                        <a href="/start" className=' flex items-center border-b-2 border-black xl:text-lg 2xl:text-2xl max-2xl:text-5xl'>
                            Start Intake


                            <svg width="18" height="18" viewBox="0 0 18 18" className='ml-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 13.75L13.75 4M13.75 4V13.36M13.75 4H4.39" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </a>
                        {/* </div>

                        <div> */}
                        {/* <ul className='list-section'>

                            <li>
                                <a href='/contact'>
                                    Contacts
                                </a>
                            </li>


                            <li className=''>
                                <a href="/start" className='lg:px-2'>
                                    Start Intake
                                </a>
                            </li>
                        </ul> */}
                    </div>

                </div>
                {/* </div> */}
            </header>

        </div>

    )
}
