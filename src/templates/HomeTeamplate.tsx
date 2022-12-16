import React from 'react'
import {Outlet} from 'react-router-dom'

type Props = {}

export default function HomeTeamplate({}: Props) {
  return (
    <>
    <header className='bg-dark text-while p-3'>
        Header
    </header>
    <div className='content' style={{minHeight:'75vh'}}>
        <Outlet />

    </div>
    <header className='bg-dark text-while p-3'>
        Footer
    </header>
    </>
  )
}