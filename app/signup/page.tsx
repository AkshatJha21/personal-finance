"use client";

import SignupForm from '@/components/custom/SignupForm'
import Navbar from '@/components/custom/TopBar'
import React from 'react'

const SignupPage = () => {
  return (
    <div className='h-screen'>
        <Navbar />
        <SignupForm />
    </div>
  )
}

export default SignupPage