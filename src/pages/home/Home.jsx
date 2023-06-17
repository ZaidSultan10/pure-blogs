import React from 'react'
import Banner from '../../components/banner/Banner'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import AdminAbout from '../../components/adminAbout/AdminAbout'
import ContactUs from '../../components/contactUs/ContactUs'
import './_homeStyles.scss'

const Home = () => {
  return (
    <main className='home__container'>
        <Banner />
        <FeaturedBlogs />
        <AdminAbout />
        <ContactUs />
    </main>
  )
}

export default Home