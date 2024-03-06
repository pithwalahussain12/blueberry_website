import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Work from '../component/work'
import Portfolio from '../component/Portfolio'
import Unique from '../component/Unique'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Worksection from '../component/worksection'
import Expertise from '../component/Expertise'
import Footer2 from '../component/footer2'

export default function Home() {
    return (
        <div className='app'>
            <Header />
            <Banner />
            <Expertise />
            <Work />
            <Worksection />
            <Portfolio />
            <Unique />
            <Contact />
            <Footer2 />
            {/* <Footer /> */}
        </div>
    )
}
