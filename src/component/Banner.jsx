import React from 'react'

export default function Banner() {
    return (
        <div>
            <div className='container'>
                <h2 className='pt-8 title-banner'>
                    Creative design <br />
                    & marketing agency
                </h2>
                <p className='banner-global'>
                    We partner with global startups and
                    established companies, to deliver
                    memorable brand identities and
                    digital experiences.
                </p>

                <div className='flex justify-between items-center py-10'>
                    <button className='btn-lets'>

                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <label className='lab-work'>Let’s work together</label>
                    </button>


                    <button className='btn-email'>
                        <a className='!flex items-center'>
                            <svg width="10" height="10" className='mr-2' viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.11108 9.19469L8.69439 1.61133M8.69439 1.61133V8.89135M8.69439 1.61133H1.41442" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <label>creative@blueb.club</label>
                        </a>
                    </button>
                </div>
            </div>
            <div className=''>
                <video loop autoPlay muted className='video w-full'>
                    <source src='/assets/images/NewVideo1.mp4' type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}
