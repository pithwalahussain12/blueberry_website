import React, { useState } from 'react';
import axios from 'axios';

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://us18.api.mailchimp.com/3.0/lists/80268eefe3/members',
                {
                    email_address: email,
                    status: 'subscribed',
                },
                {
                    auth: {
                        username: 'CreativeBlueB',
                        password: 'ca6ea775ab6c53b2306217cf2652a894',
                    },
                }
            );

            if (response.status === 200) {
                setMessage('Thanks you for Subscribing');
            } else {
                setMessage('Failed to subscribe. Please try again later');
            }
        } catch (error) {
            setMessage('Failed to subscribe. Please try again later.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='relative lg:w-[500px]'>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='email-type' placeholder='Email Address' />

                <div className='absolute top-6 right-2'>
                    <button type="submit">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00032 12.8478L21.613 12.8478" stroke="#F7F7F7" stroke-width="1.53425" stroke-linecap="square" stroke-linejoin="round"></path><path d="M11.8486 2L22.6974 12.8488L11.8486 23.6975" stroke="#F7F7F7" stroke-width="1.53425" stroke-linecap="square"></path></svg>

                    </button>

                </div>
                {message && <p>{message}</p>}

            </form>
            {/* <form >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
            </form> */}
        </div>
    );
};

export default SubscribeForm;
