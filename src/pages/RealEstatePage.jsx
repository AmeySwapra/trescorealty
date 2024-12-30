import React from 'react'
import Header from '../components/common/Header'
import SearchBox from '../components/common/SearchBox'
import Footer from '../components/common/Footer'
import RealEstate from '../components/RealEstate'

function RealEstatePage() {
  return (
    <>
      <Header/>
      <SearchBox/>
      <RealEstate/>
      <Footer/>
    </>
  )
}

export default RealEstatePage