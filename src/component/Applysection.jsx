import React from 'react'

export default function Applysection() {
    return (
        <div>
            <div className='container b-bottom-0 pt-24 pb-24' style={{ borderBottom: '1px solid #000' }}>
                <div>
                    <h3 className='text-[2.8vw] productBold w-[26vw] new-business pb-6'>
                        New Business
                    </h3>

                    <a href="mailto:enquiry@blueb.club" >

                        <button className='btn-lets'>

                            <label className='lab-work text-5xl font-extrabold mr-3 productBold'>enquiry@blueb.club</label>

                            <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                    </a>

                </div>
            </div>

            <div className='container pt-[3vw]'>
                <div className='carrer-p'>
                    <p className='productBold text-[1vw] pb-2'>Careers</p>
                    <h3 className='text-[1.6vw] productBold w-[26vw] pb-6'>
                        We're always looking for diverse, talented, and passionate artists to join the team.
                    </h3>

                    <a href="mailto:enquiry@blueb.club" >

                        <button className='btn-lets'>

                            <label className='lab-work text-5xl font-extrabold mr-3 productBold'>Apply here</label>

                            <svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                    </a>

                </div>
            </div>
        </div>
    )
}
