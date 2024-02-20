import React from 'react'

export default function Contact() {
    return (
        <div className='py-20'>
            <div className='container'>
                <div className='lg:grid block grid-cols-2 gap-4'>
                    <div>
                        <h1 className='text-6xl productBold'>
                            We would love to <br /> hear from you.
                        </h1>
                        <p className='pt-6 productregular text-lg w-96'>
                            Feel free to reach out if you want to Collaborate
                            with us, or simply have a chat.
                        </p>
                    </div>
                    <div>
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
                </div>
            </div>
        </div>
    )
}
