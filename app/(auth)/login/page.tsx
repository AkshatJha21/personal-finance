import LoginForm from '@/components/custom/LoginForm'
import Navbar from '@/components/custom/TopBar'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='h-screen'>
        <Navbar />
        <LoginForm />
    </div>
  )
}

export default LoginPage