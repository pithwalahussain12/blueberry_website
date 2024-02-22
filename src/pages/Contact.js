import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Portfolio from '../component/Portfolio'
import Contact1 from '../component/Contact'
import Transform from '../component/Transform'
import Applysection from '../component/Applysection'
import Footer2 from '../component/footer2'


export default function Contact() {
    return (
        <div>
            <Header />
            <a href="mailto:creative@blueb.club">

                <button className='btn-email'>
                    <a href="mailto:creative@blueb.club" className='!flex items-center'>

                        <svg width="10" height="10" className='mr-2' viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.11108 9.19469L8.69439 1.61133M8.69439 1.61133V8.89135M8.69439 1.61133H1.41442" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <label className='block'>creative@blueb.club</label>
                    </a>
                </button>
            </a>
            <Transform />
            <Applysection />
            <Portfolio />
            <Contact1 />
            <Footer2 />

            {/* <Footer /> */}
        </div>
    )
}
