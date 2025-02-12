import React from 'react'

const SignupPreview = ({ formData }) => {
  const { name, email } = formData

  return (
    <div className='hidden lg:block bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 sticky top-8'>
      <div className='text-center space-y-6'>
        {/* Profile Image */}
        <div className='relative mx-auto w-24 h-24 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex items-center justify-center'>
          {name ? (
            <span className='text-2xl font-bold text-white'>
              {name.split(' ').map(word => word[0]).join('')}
            </span>
          ) : (
            <svg className="w-12 h-12 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
          <div className='absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-4 border-white'></div>
        </div>

        {/* Welcome Message */}
        <div className='space-y-2'>
          <h3 className='text-xl font-bold text-gray-900'>
            {name ? `Welcome, ${name.split(' ')[0]}!` : 'Hello there!'}
          </h3>
          <p className='text-sm text-gray-500'>
            {name ? "You're almost part of our community" : "Let's get you started"}
          </p>
        </div>

        {/* Preview Info */}
        <div className='space-y-4 bg-white/50 backdrop-blur-sm rounded-xl p-6 text-left'>
          <div>
            <p className='text-xs font-medium text-gray-500 mb-1'>FULL NAME</p>
            <p className='text-gray-900 font-medium'>
              {name || 'Your Name'}
            </p>
          </div>
          <div>
            <p className='text-xs font-medium text-gray-500 mb-1'>EMAIL</p>
            <p className='text-gray-900 font-medium break-all'>
              {email || 'your@email.com'}
            </p>
          </div>

          {/* Fun Facts */}
          <div className='pt-4 border-t border-gray-100'>
            <p className='text-xs font-medium text-gray-500 mb-3'>MEMBERSHIP PERKS</p>
            <div className='space-y-3'>
              <div className='flex items-center gap-2 text-sm text-gray-600'>
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Exclusive member discounts</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-gray-600'>
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Early access to sales</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-gray-600'>
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free shipping on first order</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-4 right-4'>
          <div className='w-20 h-20 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-xl'></div>
        </div>
        <div className='absolute bottom-4 left-4'>
          <div className='w-32 h-32 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl'></div>
        </div>
      </div>
    </div>
  )
}

export default SignupPreview 