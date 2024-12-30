import React from 'react'
import Footer from '../components/common/Footer'
import Contact from '../components/Contact'
import Header from '../components/common/Header'
import SearchBox from '../components/common/SearchBox'

function ContactPage() {
  return (
    <>
     <Header/>
     <SearchBox/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default ContactPage