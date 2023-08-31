import React, { Fragment } from 'react'
import Header from '../../components/header/Header'
import Clean from '../../components/clean/Clean'
import About from '../../components/about/About'
import Services from '../../components/services/Services'
import Articles from '../../components/articles/Articles'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <Fragment>
        <Header/>
        <Clean/>
        <About/>
        <Services/>
        <Articles/>
        <Contact/>
        <Footer/>
    </Fragment>
  )
}
