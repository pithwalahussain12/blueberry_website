import React from 'react'

export default function Worksection() {
    return (
        <div className='py-[4vw] pt-[6vw]'>
            <div className='container'>
                <div className='lg:flex block items-center justify-between'>
                    <div>
                        <h2 className='text-[4vw] productBold title-port'>Portfolio</h2>

                        <p className='pt-[2vw] para-setting'><span className='text-[2.2vw] productBold'>5+</span> <label className='productregular text-[0.8vw] '>completed projects</label></p>

                        <div className='flex mt-[0.5vw]'>
                            <a href="https://www.behance.net/BlueberrysClub" className='btn-behance-one'>
                                <button className='btn-behance'>
                                    Behance
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 14L14 1M14 1V13.48M14 1H1.52" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>

                            </a>

                            <a href='https://www.instagram.com/blueb.club'>
                                <button className='btn-behance'>
                                    Instagram
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 14L14 1M14 1V13.48M14 1H1.52" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </a>

                        </div>
                    </div>
                    <div>
                        <p className='w-[22.395833333333332vw] productBold text-[1.5vw] para-subhead'>
                            Our works are a blend of
                            innovative thinking and practical
                            solutions, ensuring they are both
                            unique and effective.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
