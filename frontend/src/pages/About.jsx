import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='py-12 px-4 sm:px-6 lg:px-8'>
            {/* Header Section */}
            <div className='text-center py-12 relative mb-16'>
                {/* Decorative Elements */}
                <div className='absolute left-1/2 top-0 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
                
                {/* Main Heading */}
                <div className='space-y-4'>
                    <h2 className='text-4xl font-bold tracking-tight'>
                        About
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                            Us
                        </span>
                    </h2>
                    
                    {/* Subtitle */}
                    <p className='w-3/4 m-auto text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed'>
                        Discover our journey in fashion and commitment to quality
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto'>
                {/* Story Section */}
                <div className='flex flex-col lg:flex-row gap-12 items-center mb-20'>
                    <div className='lg:w-1/2 space-y-6'>
                        <h3 className='text-2xl font-bold text-gray-900'>Our Story</h3>
                        <p className='text-gray-600 leading-relaxed'>
                            Founded in 2024, we started with a simple mission: to provide high-quality, 
                            stylish clothing that makes everyone feel confident and comfortable. Our journey 
                            began in a small shop in Kathmandu, and today we're proud to serve customers 
                            across Nepal.
                        </p>
                        <p className='text-gray-600 leading-relaxed'>
                            We believe that fashion should be accessible to everyone, and our collections 
                            reflect this philosophy. Each piece is carefully selected to ensure quality, 
                            style, and affordability.
                        </p>
                    </div>
                    <div className='lg:w-1/2'>
                        <img 
                            src={assets.about_img} 
                            alt="Our Story" 
                            className='rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                        />
                    </div>
                </div>

                {/* Values Section */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
                    <div className='group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300
                                  border border-gray-100 hover:border-pink-100'>
                        <div className='w-12 h-12 mb-4 rounded-full bg-pink-50 flex items-center justify-center
                                      group-hover:bg-pink-100 transition-colors duration-300'>
                            <img src={assets.quality_icon} className='w-6 h-6' alt="" />
                        </div>
                        <h4 className='text-lg font-semibold mb-2'>Quality First</h4>
                        <p className='text-gray-600'>We never compromise on quality, ensuring each piece meets our high standards.</p>
                    </div>

                    <div className='group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300
                                  border border-gray-100 hover:border-pink-100'>
                        <div className='w-12 h-12 mb-4 rounded-full bg-pink-50 flex items-center justify-center
                                      group-hover:bg-pink-100 transition-colors duration-300'>
                            <img src={assets.exchange_icon} className='w-6 h-6' alt="" />
                        </div>
                        <h4 className='text-lg font-semibold mb-2'>Customer Satisfaction</h4>
                        <p className='text-gray-600'>Your satisfaction is our priority, with easy returns and exchanges.</p>
                    </div>

                    <div className='group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300
                                  border border-gray-100 hover:border-pink-100'>
                        <div className='w-12 h-12 mb-4 rounded-full bg-pink-50 flex items-center justify-center
                                      group-hover:bg-pink-100 transition-colors duration-300'>
                            <img src={assets.support_img} className='w-6 h-6' alt="" />
                        </div>
                        <h4 className='text-lg font-semibold mb-2'>24/7 Support</h4>
                        <p className='text-gray-600'>Our dedicated team is always here to help you with any questions.</p>
                    </div>
                </div>

                {/* Team Section */}
                <div className='text-center mb-12'>
                    <h3 className='text-2xl font-bold mb-8'>Meet Our Team</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {[
                            { 
                                name: 'Shreejan Bhattarai', 
                                role: 'Founder & CEO',
                                image: assets.team_member1,
                                social: {
                                    linkedin: 'https://www.linkedin.com/in/shreejan-bhattarai/',
                                    twitter: 'https://x.com/shreeyjan001',
                                    instagram: 'https://www.instagram.com/i_am_shreey001/'
                                }
                            },
                            { 
                                name: 'Kiran Parajuli', 
                                role: 'Creative Director',
                                image: assets.team_member2,
                                social: {
                                    linkedin: 'https://www.linkedin.com/in/kiran-parajuli-550ab2349/',
                                    twitter: 'https://x.com/KIRAN20809396',
                                    instagram: 'https://www.instagram.com/kiran.parajuli.754/'
                                }
                            },
                            { 
                                name: 'Anish Acharya', 
                                role: 'Head of Operations',
                                image: assets.team_member3,
                                social: {
                                    linkedin: 'https://www.linkedin.com/in/anish-acharya-819755212/',
                                    twitter: '#',
                                    instagram: 'https://www.instagram.com/iamanish_acharya/'
                                }
                            },
                            { 
                                name: 'Ujjwal Bhandari', 
                                role: 'Customer Relations',
                                image: assets.team_member4,
                                social: {
                                    linkedin: 'https://www.linkedin.com/in/ujjwalbhandarii/',
                                    twitter: 'https://x.com/ujjwalbhandarii',
                                    instagram: 'https://www.instagram.com/ujjwalbhandarri/'
                                }
                            }
                        ].map((member, index) => (
                            <div key={index} className='group'>
                                <div className='relative mb-4 rounded-xl overflow-hidden bg-gradient-to-b from-pink-50 to-white'>
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className='w-full aspect-square object-cover transition-transform duration-500
                                                 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                                  opacity-0 group-hover:opacity-100 transition-all duration-500
                                                  flex items-end justify-center pb-6'>
                                        <div className='flex gap-4'>
                                            {Object.entries(member.social).map(([platform, link]) => (
                                                <a 
                                                    key={platform}
                                                    href={link}
                                                    className='w-8 h-8 rounded-full bg-white/90 flex items-center justify-center
                                                             transform -translate-y-4 opacity-0 group-hover:translate-y-0 
                                                             group-hover:opacity-100 transition-all duration-300
                                                             hover:bg-pink-50'
                                                    style={{
                                                        transitionDelay: `${Object.keys(member.social).indexOf(platform) * 100}ms`
                                                    }}
                                                >
                                                    <img 
                                                        src={assets[`${platform}_icon`]} 
                                                        alt={platform} 
                                                        className='w-4 h-4'
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-1 group-hover:translate-y-1 transition-transform duration-300'>
                                    <h4 className='font-semibold text-gray-900'>{member.name}</h4>
                                    <p className='text-sm text-pink-500'>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

