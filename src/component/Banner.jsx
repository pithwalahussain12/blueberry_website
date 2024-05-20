import React from 'react'

export default function Banner() {
    return (
        <div className=''>

            <div className='container lg:h-screen !pt-10 !pb-20 lg:py-0 !mt-[6.400000000000002vw]'>

                <h2 className='pt-[1.5vw]  title-banner'>
                    Creative design <br />
                    & marketing agency
                </h2>
                <p className='banner-global'>
                    We partner with global startups and
                    established companies, to deliver
                    memorable brand identities and
                    digital experiences.
                </p>

                <div className='flex justify-between items-center py-[1.9vw]'>
                    <a href='/contact' className='cursor-pointer'>
                        <button className='btn-lets cursor-pointer'>

                            <svg className='h-[0.7vw]' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <label className='lab-work'>Let’s work together</label>
                        </button>

                    </a>

                    {/* <a ds */}
                </div>
            </div>
            <div className=''>
                <video loop autoPlay muted className='video w-full'>
                    <source src='/assets/images/BlueB-Web_12.mp4' type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}
