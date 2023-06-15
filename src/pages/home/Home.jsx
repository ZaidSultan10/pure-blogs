import React from 'react'
import Banner from '../../components/banner/Banner'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'

const Home = () => {
  return (
    <main className='home__container'>
        <Banner />
        <FeaturedBlogs />
    </main>
  )
}

export default Home