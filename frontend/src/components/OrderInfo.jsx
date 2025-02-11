import React from 'react'

const OrderInfo = ({ formData }) => {
  const { firstName, lastName, email, phone, street, city, state, zipCode, country } = formData

  return (
    <div className='mb-6 pb-6 border-b border-gray-200'>
      <div className='space-y-2 mb-4'>
        <h3 className='text-xl font-bold text-gray-900'>Delivery Details</h3>
        <p className='text-sm text-gray-500'>Review your delivery information</p>
      </div>

      {/* Only show if at least one field is filled */}
      {Object.values(formData).some(value => value) ? (
        <div className='space-y-4 text-gray-600'>
          {/* Customer Info */}
          {(firstName || lastName) && (
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center'>
                <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className='font-medium'>{[firstName, lastName].filter(Boolean).join(' ')}</p>
                <p className='text-sm text-gray-500'>Customer</p>
              </div>
            </div>
          )}

          {/* Contact Info */}
          {(email || phone) && (
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center'>
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className='space-y-1'>
                {email && <p className='font-medium'>{email}</p>}
                {phone && <p>{phone}</p>}
              </div>
            </div>
          )}

          {/* Address Info */}
          {(street || city || state || zipCode || country) && (
            <div className='flex items-start gap-2'>
              <div className='w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center'>
                <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className='font-medium'>Delivery Address</p>
                <div className='text-sm space-y-1 mt-1'>
                  {street && <p>{street}</p>}
                  {[city, state, zipCode].filter(Boolean).length > 0 && (
                    <p>{[city, state, zipCode].filter(Boolean).join(', ')}</p>
                  )}
                  {country && <p>{country}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className='text-sm text-gray-500 italic'>
          Start filling in your delivery information to see it appear here
        </p>
      )}
    </div>
  )
}

export default OrderInfo 