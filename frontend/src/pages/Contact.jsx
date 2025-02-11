import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const socialLinks = [
    {
      name: 'Facebook',
      icon: assets.facebook_icon,
      link: '#',
      color: 'hover:bg-blue-50 hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: assets.instagram_icon,
      link: '#',
      color: 'hover:bg-pink-50 hover:text-pink-600'
    },
    {
      name: 'Twitter',
      icon: assets.twitter_icon,
      link: '#',
      color: 'hover:bg-sky-50 hover:text-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: assets.linkedin_icon,
      link: '#',
      color: 'hover:bg-blue-50 hover:text-blue-700'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
      <div className='py-12 px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center py-12 relative mb-16'>
          {/* Decorative Elements */}
          <div className='absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>

          {/* Main Heading */}
          <div className='space-y-4'>
            <h2 className='text-4xl font-bold tracking-tight'>
              Contact
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                            Us
                        </span>
            </h2>

            {/* Subtitle */}
            <p className='w-3/4 m-auto text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed'>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className='max-w-7xl mx-auto'>
          {/* Contact Info & Social Media */}
          <div className='flex flex-col md:flex-row gap-12 mb-20'>
            {/* Left Side - Contact Image & Info */}
            <div className='md:w-1/2'>
              <div className='relative rounded-2xl overflow-hidden mb-8 group'>
                <img
                    src={assets.contact_img}
                    alt="Contact Us"
                    className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                  <h3 className='text-2xl font-bold mb-2'>Get in Touch</h3>
                  <p className='text-white/80'>We're here to help and answer any question you might have</p>
                </div>
              </div>

              {/* Contact Cards */}
              <div className='space-y-6'>
                <div className='group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300
                                          border border-gray-100 hover:border-pink-100'>
                  <div className='flex items-center gap-4'>
                    <div className='w-15 h-15 rounded-full bg-pink-50 flex items-center justify-center
                                                  group-hover:bg-pink-100 transition-colors duration-300'>
                      <img src={assets.support_img} className='w-8 h-8' alt="" />
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold'>Customer Support</h4>
                      <p className='text-gray-600'>support@shreeyjan.com</p>
                      <p className='text-gray-600'>+977 986-6XXXXXX</p>
                    </div>
                  </div>
                </div>

                <div className='group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300
                                          border border-gray-100 hover:border-pink-100'>
                  <div className='flex items-center gap-4'>
                    <div className='w-15 h-15 rounded-full bg-pink-50 flex items-center justify-center
                                                  group-hover:bg-pink-100 transition-colors duration-300'>
                      <img src={assets.visit} className='w-9 h-9' alt="" />
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold'>Visit Us</h4>
                      <p className='text-gray-600'>Kathmandu, Nepal</p>
                      <p className='text-gray-600'>Open: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className='mt-8'>
                <h4 className='text-lg font-semibold mb-4'>Follow Us</h4>
                <div className='grid grid-cols-2 gap-4'>
                  {socialLinks.map((social) => (
                      <a
                          key={social.name}
                          href={social.link}
                          className={`group flex items-center gap-3 p-4 rounded-xl border border-gray-100 
                                                  hover:border-gray-200 transition-all duration-300 ${social.color}`}
                      >
                        <div className='w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center
                                                      transition-colors duration-300'>
                          <img src={social.icon} className='w-5 h-5' alt={social.name} />
                        </div>
                        <span className='font-medium'>{social.name}</span>
                      </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className='md:w-1/2'>
              <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100'>
                <h3 className='text-2xl font-bold mb-6'>Send us a Message</h3>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Your Name
                      </label>
                      <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
                                                     focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                          placeholder='John Doe'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-2'>
                        Email Address
                      </label>
                      <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
                                                     focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                          placeholder='john@example.com'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Subject
                    </label>
                    <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
                                                 focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                        placeholder='How can we help?'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Message
                    </label>
                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={6}
                        className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500
                                                 focus:ring-2 focus:ring-pink-200 outline-none transition-all duration-300'
                        placeholder='Your message...'
                    ></textarea>
                  </div>

                  <button
                      type='submit'
                      className='w-full sm:w-auto px-8 py-3 bg-black text-white rounded-full font-medium
                                             transition-all duration-300 hover:bg-gray-800 hover:shadow-lg
                                             hover:-translate-y-0.5 focus:ring-2 focus:ring-gray-200'
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className='mt-20'>
            <div className='w-full h-[400px] rounded-xl overflow-hidden shadow-lg'>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625949266!2d85.29111318850454!3d27.70895594444538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1696431184459!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
