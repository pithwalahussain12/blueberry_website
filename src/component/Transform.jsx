import React from 'react'

export default function Transform() {
    return (
        <div className=''>
            <div className='container b-bottom-0' style={{ borderBottom: '1px solid #000000', paddingBottom: '3rem' }}>
                <div className='lg:grid block grid-cols-2 gap'>
                    <div className='flex items-center'>
                        <div className='lg:mt-0 mt-16'>
                            <h2 className='lg:text-[6vw] lg:leading-[6vw] productBold text-your mb-8'>Let’s <br />
                                Transform<br />
                                Your Brand
                            </h2>
                            <p className='text-[1vw] lg:w-[26vw] productregular pb-6 text-para'>Looking for a brand partner in a new way?</p>
                            <p className='text-[1vw] lg:w-[26vw] productregular pb-6 text-para'>
                                We work with brand experts to build brand identities, systems, and applications that deepen audience relationships, strengthen brand affinity, and drive long-term growth.
                            </p>

                        </div>
                    </div>
                    <div>
                        <video loop autoPlay muted className='h-full  lg:p-20 pr-0 rounded-[4vw] w-full'>
                            <source src='/assets/images/NewVideo.mp4' type="video/mp4"></source>
                        </video>
                    </div>

                </div>
            </div>
        </div>
    )
}
