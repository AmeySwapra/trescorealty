import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import SearchBox from '../components/common/SearchBox'
import General from '../components/General'
import GeneralAbout from '../components/GeneralAbout'
import Testimonial from '../components/Testimonial'
import Ventures from '../components/Ventures'


function HomePage() {
  return (
    <>
      <Header/>
      <SearchBox/>
      <General/>
      <GeneralAbout/>
      <Testimonial/>
      <Ventures/>
      <Footer/>
    </>
  )
}

export default HomePage