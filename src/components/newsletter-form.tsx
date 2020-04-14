/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { useState } from 'react';
import Notification, { notify } from 'react-notify-toast';
import addToMailchip from 'gatsby-plugin-mailchimp';

const NewsletterForm: React.FunctionComponent<{}> = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await addToMailchip(email);
        setEmail('');
        let notificationColors = { background: `primary`, text: `secondary` }
        notify.show(result.msg);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };

    return (
        <div>
            <Notification />
            <Styled.h3 sx={{ textAlign: 'center' }}>Get posts delivered to your inbox</Styled.h3>
            <form name="newsletter-form" onSubmit={handleSubmit} className="m-6 flex justify-center">
                <label for="email-newsletter"></label>
                <input onChange={handleEmailChange} name="email-newsletter" className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 bg-white"
                    sx={{ borderColor: `secondary` }}
                    value={email}
                    placeholder="your@mail.com" />
                <button sx={{ borderColor: `secondary` }} className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
            </form>
        </div>
    );
};


export default NewsletterForm