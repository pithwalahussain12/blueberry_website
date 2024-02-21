import React from 'react'

export default function Header() {
    return (
        <header>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div className='logo-main py-4 ml-2'>
                        <a href='/'>
                            <img src='/assets/images/Logo.png' alt='' />

                        </a>
                    </div>

                    <div>
                        <ul className='list-section'>

                            <li>
                                <a href='/contact'>
                                    Contacts
                                </a>
                            </li>
                            {/* 
                            <li className='relative top-2'>
                                <a>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 5H21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3 12H21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3 19H21" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </a>
                            </li> */}

                            <li className='btnstart'>
                                <a href="/start" className='lg:px-2'>
                                    Start Intake
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}
