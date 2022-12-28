import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

type Props = {}

export default function HomeTeamplate({}: Props) {
  return (
    <>
    <Header/>
    <div className='content' >
        <Outlet />
    </div>
    <Footer/>
    
    </>
  )
}