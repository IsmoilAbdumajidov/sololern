import React from 'react'
import Navigating from '../../Components/Navbar/Navigating'
import Header from '../../Components/Header/Header'
import Carousel from '../../Components/Carousel/Carousel'
import Body from '../../Components/Body/Body'
import People from '../../Components/People/People'
import Cards from '../../Components/Cards/Cards'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
    return (
        <div>
            <Navigating />
            <Header />
            <div className="py-3 bg-white"></div>
            <Carousel />
            <div className='bg-[#f2f5f7] py-[26vh]'></div>
            <Body />
            <People />
            <Cards />
            <Footer />
        </div>
    )
}

export default HomePage