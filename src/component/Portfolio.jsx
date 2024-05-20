import React from 'react'

export default function Portfolio() {
    return (
        <div className='lg:py-20 unique-work-2'>
            <div className='container border-custom'>
                <h2 className='text-[4vw] productBold title-work'>Our work</h2>

                <div className='lg:grid block lg:grid-cols-2 gap-8'>
                    <div className='mt-8'>
                        <img src="/assets/images/p1.png" className='w-full h-[40vw] object-cover rounded-[1vw]' alt='' />
                        <p className='lorem-ipsum mt-[0.8vw]'>Online Shopping Platform - Vision OS</p>
                    </div>
                    <div className='mt-8'>
                        <img src="/assets/images/p2.png" className='w-full h-[40vw] object-cover rounded-[1vw]' alt='' />
                        <p className='lorem-ipsum mt-[0.8vw]'>Marke - Digital Brand Agency Landing Page Website
                        </p>
                    </div>
                    <div className='mt-8'>
                        <img src="/assets/images/p3.png" className='w-full h-[40vw] object-cover rounded-[1vw]' alt='' />
                        <p className='lorem-ipsum mt-[0.8vw]'>JoCreate.AI - Website design for NFT collection creation service
                        </p>
                    </div>
                    <div className='mt-8'>
                        <img src="/assets/images/p5.png" className='w-full h-[40vw] object-cover rounded-[1vw]' alt='' />
                        <p className='lorem-ipsum mt-[0.8vw]'>X-Leap - website for blockchain-based payment platform
                        </p>
                        <a className='want-more' href='https://www.behance.net/BlueberrysClub'>

                            <h1 className='text-[3.5vw] font-bold productBold pt-12 flex items-center'>
                                Want more?

                                <svg className='ml-4 h-[1.8vw]' viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
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
