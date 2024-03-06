import React from 'react'

export default function Expertise() {
    return (

        <div class="relative">
            <div className='container'>
                <h1 className='lg:text-8xl text-3xl py-24 productBold'>Our expertise in</h1>
            </div>
            <div data-sticky className="sticky top-0 h-screen bg-white  flex justify-start items-center">
                <div>
                    <section className=''>
                        <div className='flex items-center'>
                            <div>
                                <img className='h-screen' src='/assets/images/image-1.png' alt='' />
                            </div>

                            <div  className='brand-identity-design w-[600px]'>
                                <h2  className='productBold text-6xl mb-7'>Brand identity <br /> design</h2>
                                <p  className='productregular text-lg'>
                                    Key to standout success. We shape unique brand identities that last and resonate in dynamic evolved and competitive markets.
                                </p>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
            <div data-sticky className="sticky top-0 h-screen bg-white  flex justify-start items-center">
                <section className=''>
                    <div className='flex items-center'>
                        <div>
                            <img className='h-screen' src='/assets/images/p-2.png' alt='' />
                        </div>

                        <div  className='brand-identity-design w-[600px]'>
                            <h2  className='productBold text-6xl mb-7'>
                                UX strategy web app design</h2>
                            <p className='productregular text-lg'>
                                Key to standout success. We shape unique brand identities that last and resonate in dynamic evolved and competitive markets.
                            </p>
                        </div>

                    </div>
                </section>
            </div>

            <div data-sticky className="sticky top-0 h-screen bg-white  flex justify-start items-center">
                <section className=''>
                    <div className='flex items-center'>
                        <div>
                            <img className='h-screen' src='/assets/images/p-3.png' alt='' />
                        </div>

                        <div  className='brand-identity-design w-[600px]'>
                            <h2 className='productBold text-6xl mb-7'>Product <br /> design</h2>
                            <p className='productregular text-lg'>
                                Key to standout success. We shape unique brand identities that last and resonate in dynamic evolved and competitive markets.
                            </p>
                        </div>

                    </div>
                </section>
            </div>

            <div data-sticky className="sticky top-0 h-screen bg-white  flex justify-start items-center">
                <section className=''>
                    <div className='flex items-center'>
                        <div>
                            <img className='h-screen' src='/assets/images/p-4.png' alt='' />
                        </div>

                        <div  className='brand-identity-design w-[600px]'>
                            <h2 className='productBold text-6xl mb-7'>Design <br /> maintenance</h2>
                            <p className='productregular text-lg'>
                                Key to standout success. We shape unique brand identities that last and resonate in dynamic evolved and competitive markets.
                            </p>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}
