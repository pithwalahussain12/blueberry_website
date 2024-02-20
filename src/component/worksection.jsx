import React from 'react'

export default function Worksection() {
    return (
        <div className='py-10 pt-28'>
            <div className='container'>
                <div className='lg:flex block items-center justify-between'>
                    <div>
                        <h2 className='text-4xl productBold'>Portfolio</h2>

                        <p className='pt-16'><span className='text-4xl productBold'>5+</span> <label className='productregular'>completed projects</label></p>

                        <div className='flex mt-4'>
                            <a href="https://www.behance.net/BlueberrysClub">
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
                        <p className='w-[430px] productBold text-3xl'>
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
