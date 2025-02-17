import React, { useState } from 'react'

const NewsLetterBox = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        // Simulating API call
        try {
            // Add your newsletter subscription logic here
            console.log('Email submitted:', email);
            setMessage({ type: 'success', text: 'Thank you for subscribing!' });
            setEmail('');
        } catch (error) {
            setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-gray-900 to-black py-16 px-4 sm:px-8 rounded-3xl shadow-2xl border border-gray-800'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#ff69b4_0,transparent_70%)]'></div>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#9f7aea_0,transparent_70%)]'></div>
            </div>

            <div className='relative max-w-4xl mx-auto text-center'>
                {/* Header */}
                <h2 className='text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 mb-4'>
                    Get 20% Off Your First Order
                </h2>
                
                {/* Description */}
                <p className='text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
                    Join our fashion community and stay ahead with the latest trends, exclusive offers, and style tips delivered straight to your inbox.
                </p>

                {/* Subscription Form */}
                <form onSubmit={onSubmitHandler} className='max-w-md mx-auto'>
                    <div className='relative group'>
                        <input 
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full bg-white/10 text-white placeholder-gray-400 rounded-lg px-6 py-4 outline-none border border-gray-700 
                                     transition-all duration-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20'
                            placeholder='Enter your email address'
                            required
                        />
                        
                        <button 
                            type='submit'
                            disabled={isSubmitting}
                            className='mt-4 sm:mt-0 sm:absolute sm:right-2 sm:top-2 px-6 py-2 sm:py-2 bg-gradient-to-r from-pink-500 to-purple-500 
                                     text-white font-medium rounded-md transition-all duration-300 hover:from-pink-600 hover:to-purple-600
                                     focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900
                                     disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto'
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                        </button>
                    </div>
                </form>

                {/* Success/Error Message */}
                {message.text && (
                    <p className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {message.text}
                    </p>
                )}

                {/* Trust Badges */}
                <div className='mt-8 flex flex-wrap justify-center gap-4 text-gray-400 text-sm'>
                    <span className='flex items-center'>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Secure
                    </span>
                    <span className='flex items-center'>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        No Spam
                    </span>
                    <span className='flex items-center'>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Cancel Anytime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterBox
