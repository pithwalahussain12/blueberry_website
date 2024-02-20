import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function Startintake() {
    return (
        <div>
            <Header />
            <div>
                <div className='container'>
                    <div className='grid grid-cols-2 gap-12 pb-16'>
                        <div>
                            <h2 className='productBold text-2xl pt-12'>Acquainted?</h2>
                            <p className='productregular text-lg pb-6'>Enter your details here and you will be in touch with one of our professionals in no time for an intake!</p>

                            <form>
                                <div>
                                    <input type='text' className='input-title' placeholder='Full name' />
                                </div>
                                <div>
                                    <input type='email' className='input-title' placeholder='Email address' />
                                </div>
                                <div>
                                    <input type='text' className='input-title' placeholder='Company Name' />
                                </div>
                                <div>
                                    <textarea type='text' className='input-textarea' placeholder='Message'></textarea>
                                </div>
                                <div>
                                    <button className='btn-submit'>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <h2 className='productBold text-2xl pt-12'>What do you like to drink?</h2>
                            <p className='productregular text-lg pb-6'>The difference is in small details.</p>

                            <ul className='list-cofee'>
                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/koffie.png' alt='' />
                                    <label>Koffie</label>
                                </li>
                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/cappuccino.png' alt='' />
                                    <label>Cappuccino</label>
                                </li>
                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/espresso.png' alt='' />
                                    <label>Espresso
                                    </label>
                                </li>
                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/tea.png' alt='' />
                                    <label>Thee
                                    </label>
                                </li>

                            </ul>

                            <ul className='list-cofee pt-8'>

                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/beer.png' alt='' />
                                    <label>Bier</label>
                                </li>

                                <li>
                                    <img src='https://www.every-day.nl/app/themes/everyday/dist/images/water.png' alt='' />
                                    <label>Water
                                    </label>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
