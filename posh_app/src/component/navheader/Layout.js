import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
    return (
        <div className='container-xxl'>
            <Header />
            <Outlet style={{padding: "20px"}} className='container-xxl'/>
            <Footer />
        </div>
    )
}

export default Layout
