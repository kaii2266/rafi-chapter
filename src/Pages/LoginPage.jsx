import React from 'react'
import AuthLayouts from '../Layout/AuthLayouts'
import FormLogin from '../Fragments/FormLogin'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <AuthLayouts image="../assets/login.png" description="sign up to your journey" >
        <FormLogin/>
     <p className='text-center my-2'>
          <span className='text-slate-600'>Don't have an account? </span>
          <Link ta="/login" className='font-bold text-blue-500'>login</Link>
        </p>
    </AuthLayouts>
  )
}

export default LoginPage
