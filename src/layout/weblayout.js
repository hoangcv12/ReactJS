import React from 'react'
import Footer from '../components/web/footer'
import Nav from '../components/web/nav'

export default function Weblayout(props) {
   
    return (

        <div>
            <Nav/>
            {props.children}
            <Footer/>
        </div>
    )
}
