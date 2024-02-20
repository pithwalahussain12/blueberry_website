import React from 'react'

export default function Transform() {
    return (
        <div className=''>
            <div className='container' style={{ borderBottom: '1px solid #000000', paddingBottom: '3rem' }}>
                <div className='lg:grid block grid-cols-2 gap'>
                    <div className='flex items-center'>
                        <div>
                            <h2 className='lg:text-8xl lg:leading-[105px] productBold mb-8'>Let’s <br />
                                Transform<br />
                                Your Brand
                            </h2>
                            <p className='text-lg lg:w-[500px] productregular pb-6'>Looking for a brand partner in a new way?</p>
                            <p className='text-lg lg:w-[500px] productregular pb-6'>
                                We work with brand experts to build brand identities, systems, and applications that deepen audience relationships, strengthen brand affinity, and drive long-term growth.
                            </p>

                        </div>
                    </div>
                    <div>
                        <video loop autoPlay muted className='h-full  p-20 pr-0 rounded-2xl w-full'>
                            <source src='/assets/images/NewVideo.mp4' type="video/mp4"></source>
                        </video>
                    </div>

                </div>
            </div>
        </div>
    )
}
