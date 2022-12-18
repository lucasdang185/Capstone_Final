import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

type Props = {}

export default function HomeTeamplate({}: Props) {
  return (
    <>
    <Header/>
    <div className='content' style={{minHeight:'75vh'}}>
        <Outlet />
    </div>
    <header className='bg-dark text-while p-3'>
        Footer
    </header>
    </>
  )
}