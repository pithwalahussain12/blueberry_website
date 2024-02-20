import React from 'react'

export default function Applysection() {
    return (
        <div>
            <div className='container'>
                {/* <div>
                    <h3>New Business</h3>
                    <p>creative@blueb.club</p>

                </div> */}
            </div>

            <div className='container pt-20'>
                <div>
                    <p className='productBold pb-2'>Careers</p>
                    <h3 className='text-3xl productBold w-[500px] pb-6'>
                        We're always looking for diverse, talented, and passionate artists to join the team.
                    </h3>
                    <button className='btn-lets'>

                        <label className='lab-work text-3xl mr-3 productBold'>Apply here</label>

                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 10.75L10.75 1M10.75 1V10.36M10.75 1H1.39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}
