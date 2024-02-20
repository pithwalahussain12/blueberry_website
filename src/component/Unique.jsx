import React from 'react'

export default function Unique() {
    return (
        <div className=''>
            <div className='container' style={{ borderBottom: '1px solid #000000', paddingBottom: '5rem' }}>
                <div className='lg:grid block grid-cols-2 gap'>
                    <div>
                        <video loop autoPlay muted className='h-full  p-20 pl-0 rounded-2xl w-full'>
                            <source src='/assets/images/NewVideo.mp4' type="video/mp4"></source>
                        </video>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <h2 className='text-6xl productBold mb-8'>A unique <br />
                                partnership.</h2>
                            <p className='text-lg w-[400px] productregular pb-6'>No two partners are alike. That’s why we take a different approach to every client relationship and project. We work with you to learn your business and adopt your brand so we can tailor our process to your needs.</p>

                            <a href='/contact' className='block'>
                                <button className='btn-lets'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <label className='lab-work'>Let’s work together</label>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
