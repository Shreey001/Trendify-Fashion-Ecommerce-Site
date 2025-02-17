import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    const stats = [
        { number: '5K+', label: 'Happy Customers' },
        { number: '500+', label: 'Products' },
        { number: '50+', label: 'Brands' },
        { number: '24/7', label: 'Support' }
    ];

    const team = [
        {
            name: 'Shreejan Bhattarai',
            role: 'Founder & CEO',
            image: assets.team_member1,
            quote: 'Leading innovation in fashion e-commerce',
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
            quote: 'Bringing creative vision to life',
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
            quote: 'Streamlining operations for excellence',
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
            quote: 'Ensuring customer satisfaction',
            social: {
                linkedin: 'https://www.linkedin.com/in/ujjwalbhandarii/',
                twitter: 'https://x.com/ujjwalbhandarii',
                instagram: 'https://www.instagram.com/ujjwalbhandarri/'
            }
        }
    ];

    return (
        <div className='min-h-screen'>
            {/* Hero Section */}
            <div className='relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white py-24'>
                <div className='absolute inset-0 opacity-20'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ff69b4_0,transparent_60%)]'></div>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#9f7aea_0,transparent_60%)]'></div>
                </div>
                
                <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                        <span className='block sm:inline'>Crafting</span>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 
                                       block sm:inline mx-0 sm:mx-3 my-2 sm:my-0'>
                            Fashion
                        </span>
                        <span className='block sm:inline'>Stories</span>
                    </h1>
                    <p className='text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed
                                 px-4 sm:px-6'>
                        Since 2024, we've been transforming the way Nepal shops for fashion, 
                        making style accessible to everyone.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
                        {stats.map((stat, index) => (
                            <div key={index} className='group'>
                                <div className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>
                                    {stat.number}
                                </div>
                                <div className='text-gray-600 mt-2'>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className='py-20 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
                        {/* Left Column - Content */}
                        <div className='space-y-8 relative'>
                            {/* Decorative Elements */}
                            <div className='absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-200/40 to-purple-200/40 
                                          rounded-full blur-2xl'></div>
                            <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-200/40 to-purple-200/40 
                                          rounded-full blur-2xl'></div>
                            
                            {/* Content */}
                            <div className='relative'>
                                <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                                    Our
                                    <span className='relative inline-block ml-3'>
                                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>
                                            Journey
                                        </span>
                                        <div className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 
                                                      rounded-full'></div>
                                    </span>
                                </h2>
                                
                                {/* Timeline */}
                                <div className='mt-12 space-y-8 relative'>
                                    <div className='absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 via-purple-200 to-transparent'></div>
                                    
                                    <div className='relative pl-8'>
                                        <div className='absolute left-0 top-0 w-2 h-2 rounded-full bg-pink-500 -translate-x-[3px]'></div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>The Beginning</h3>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Founded in 2024, we started with a simple mission: to provide high-quality, 
                                            stylish clothing that makes everyone feel confident and comfortable.
                                        </p>
                                    </div>
                                    
                                    <div className='relative pl-8'>
                                        <div className='absolute left-0 top-0 w-2 h-2 rounded-full bg-pink-400 -translate-x-[3px]'></div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>Local Roots</h3>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Our journey began in a small shop in Kathmandu, where we focused on 
                                            curating the perfect collection for our local community.
                                        </p>
                                    </div>
                                    
                                    <div className='relative pl-8'>
                                        <div className='absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-400 -translate-x-[3px]'></div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>Growing Together</h3>
                                        <p className='text-gray-600 leading-relaxed'>
                                            Today, we're proud to serve customers across Nepal, bringing fashion 
                                            and style to every corner of the country.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Column - Images */}
                        <div className='relative'>
                            {/* Main Image */}
                            <div className='relative z-10 rounded-2xl overflow-hidden shadow-xl 
                                          transform hover:-translate-y-2 transition-transform duration-500'>
                                <img 
                                    src={assets.about_img} 
                                    alt="Our Story" 
                                    className='w-full h-full object-cover'
                                />
                                <div className='absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20'></div>
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className='absolute top-4 -right-4 w-64 h-64 bg-pink-100 rounded-full 
                                          opacity-50 blur-3xl -z-10'></div>
                            <div className='absolute -bottom-4 -left-4 w-48 h-48 bg-purple-100 rounded-full 
                                          opacity-50 blur-3xl -z-10'></div>
                            
                            {/* Stats */}
                            <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg p-6 z-20
                                          w-3/4 flex justify-between items-center'>
                                <div className='text-center'>
                                    <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>
                                        5K+
                                    </div>
                                    <div className='text-sm text-gray-600'>Happy Customers</div>
                                </div>
                                <div className='h-12 w-px bg-gradient-to-b from-pink-200 to-purple-200'></div>
                                <div className='text-center'>
                                    <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>
                                        500+
                                    </div>
                                    <div className='text-sm text-gray-600'>Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                            Our
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                                Values
                            </span>
                        </h2>
                        <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
                            We're driven by our commitment to excellence and customer satisfaction
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                                      border border-gray-100 hover:border-pink-100 relative overflow-hidden'>
                            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 
                                          transform origin-left scale-x-0 transition-transform group-hover:scale-x-100'></div>
                            <div className='w-16 h-16 mb-6 rounded-xl bg-pink-50 flex items-center justify-center
                                          group-hover:bg-pink-100 transition-colors duration-300'>
                                <img src={assets.quality_icon} className='w-8 h-8' alt="Quality" />
                            </div>
                            <h3 className='text-xl font-semibold mb-4'>Quality First</h3>
                            <p className='text-gray-600 leading-relaxed'>
                                We never compromise on quality, ensuring each piece meets our high standards 
                                and exceeds your expectations.
                            </p>
                        </div>

                        <div className='group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                                      border border-gray-100 hover:border-pink-100 relative overflow-hidden'>
                            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 
                                          transform origin-left scale-x-0 transition-transform group-hover:scale-x-100'></div>
                            <div className='w-16 h-16 mb-6 rounded-xl bg-pink-50 flex items-center justify-center
                                          group-hover:bg-pink-100 transition-colors duration-300'>
                                <img src={assets.exchange_icon} className='w-8 h-8' alt="Customer Service" />
                            </div>
                            <h3 className='text-xl font-semibold mb-4'>Customer First</h3>
                            <p className='text-gray-600 leading-relaxed'>
                                Your satisfaction is our top priority. We offer hassle-free returns and 
                                exchanges to ensure you're always happy with your purchase.
                            </p>
                        </div>

                        <div className='group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                                      border border-gray-100 hover:border-pink-100 relative overflow-hidden'>
                            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 
                                          transform origin-left scale-x-0 transition-transform group-hover:scale-x-100'></div>
                            <div className='w-16 h-16 mb-6 rounded-xl bg-pink-50 flex items-center justify-center
                                          group-hover:bg-pink-100 transition-colors duration-300'>
                                <img src={assets.support_img} className='w-8 h-8' alt="Support" />
                            </div>
                            <h3 className='text-xl font-semibold mb-4'>24/7 Support</h3>
                            <p className='text-gray-600 leading-relaxed'>
                                Our dedicated support team is always here to help you with any questions 
                                or concerns, anytime you need us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className='py-20 bg-gray-50'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                            Meet Our
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ml-3'>
                                Team
                            </span>
                        </h2>
                        <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
                            The passionate individuals behind our success
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {team.map((member, index) => (
                            <div key={index} className='group relative overflow-hidden rounded-2xl bg-white shadow-lg
                                                      hover:shadow-2xl transition-all duration-500 ease-out'>
                                <div className='aspect-square overflow-hidden'>
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className='w-full h-full object-cover transition-all duration-700 
                                                 group-hover:scale-105 group-hover:rotate-2'
                                    />
                                    {/* Gradient Overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                                                  opacity-0 group-hover:opacity-100 transition-all duration-500
                                                  backdrop-blur-[1px] group-hover:backdrop-blur-[1px]'>
                                        {/* Member Quote */}
                                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 text-center
                                                      transform opacity-0 group-hover:opacity-100 transition-all duration-500
                                                       group-hover:translate-y-0'>
                                            <p className='text-white text-sm md:text-base italic'>
                                                "{member.quote}"
                                            </p>
                                        </div>
                                        {/* Social Icons */}
                                        <div className='absolute bottom-6 left-0 right-0 flex justify-center gap-3'>
                                            {Object.entries(member.social).map(([platform, link], i) => (
                                                <a 
                                                    key={platform}
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className='w-10 h-10 rounded-full bg-white/95 flex items-center justify-center
                                                             transform translate-y-12 opacity-0 group-hover:translate-y-0 
                                                             group-hover:opacity-100 transition-all duration-500
                                                             hover:bg-white hover:scale-110 hover:shadow-lg'
                                                    style={{
                                                        transitionDelay: `${i * 100}ms`
                                                    }}
                                                >
                                                    <img 
                                                        src={assets[`${platform}_icon`]} 
                                                        alt={platform} 
                                                        className='w-5 h-5'
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className='p-6 text-center bg-gradient-to-r from-gray-50 to-white
                                              group-hover:from-pink-50 group-hover:to-purple-50 transition-all duration-500'>
                                    <h3 className='text-xl font-semibold mb-1 text-gray-900
                                                 group-hover:text-transparent group-hover:bg-clip-text 
                                                 group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600'>
                                        {member.name}
                                    </h3>
                                    <p className='text-pink-500 mb-2 font-medium'>{member.role}</p>
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
