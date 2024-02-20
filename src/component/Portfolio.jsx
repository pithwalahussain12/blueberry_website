import React from 'react'

export default function Portfolio() {
    return (
        <div className='py-20'>
            <div className='container border-custom'>
                <h2 className='text-6xl productBold'>Our work</h2>

                <div className='lg:grid block lg:grid-cols-2 gap-8'>
                    <div className='mt-8'>
                        <img src="/assets/images/Maskgroup.jpg" alt='' />
                        <p className='lorem-ipsum'>What is Lorem Ipsum?</p>
                    </div>
                    <div className='mt-8'>
                        <img src="/assets/images/Mask-group-1.jpg" alt='' />
                        <p className='lorem-ipsum'>What is Lorem Ipsum?</p>
                    </div>
                    <div className='mt-8'>
                        <img src="/assets/images/Mask-group-2.jpg" alt='' />
                        <p className='lorem-ipsum'>What is Lorem Ipsum?</p>
                    </div>
                    <div className='mt-8'>
                        <img src="/assets/images/Mask-group-3.jpg" alt='' />
                        <p className='lorem-ipsum'>What is Lorem Ipsum?</p>
                        <a href='https://www.behance.net/BlueberrysClub'>

                            <h1 className='text-5xl font-bold productBold pt-12 flex items-center'>
                                Want more?

                                <svg width="35" height="33" className='ml-4' viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 19H38M38 19L21 2M38 19L21 36" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </h1>

                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
