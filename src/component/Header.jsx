import React from 'react'

export default function Header() {
    return (
        <header data-fixed className='header-blurry py-[0.8vw] fixed top-0 left-0 right-0'>
            <header>
                <div className='container'>
                    <div className='flex justify-between items-center list-section'>
                        {/* <div className='logo-main py-4 ml-2'> */}
                        {/* <a href='/' className=''>
                            <img src='/assets/images/logo.svg' className='h-[3.3vw]' alt='' />
                        </a> */}

                        <a href='/contact' className='text-zoomed'>
                            Contacts
                        </a>

                        <a href='/expertises' className='text-zoomed'>
                            Expertise
                        </a>

                        <a href='/portfolios' className='text-zoomed'>
                            Portfolio
                        </a>

                        <a href="/start" className=' flex items-center border-b-2 border-black text-zoomed'>
                            Start Intake


                            <svg className="h-[1.1vw] ml-2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 13.75L13.75 4M13.75 4V13.36M13.75 4H4.39" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </a>
                        {/* </div>

              <div> */}

                    </div>

                </div>
                {/* </div> */}
            </header>

        </header>


    )
}
