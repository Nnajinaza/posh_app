import React from 'react'
import Container from '../component/Container'
import CustomInput from '../component/CustomInput'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Container class1="login-wrapper home-wrapper-2 py-5">
      <div className='row'>
        <div className='col-12'>
            <div className='auth-card'>
                <h3 className='text-center mb-3'>LOGIN</h3>
                <form action='' className='auth-form d-flex flex-column gap-15'>
                   <CustomInput type="email" name="name" placeholder="Email" />
                   <CustomInput type="password" name="name" placeholder="Password" />

                   <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <Link to="/login" className='button border-0 text-white'>Login</Link>
                    <Link to="/register" className='button border-0 text-white'>Sign Up</Link>
                   </div>
                </form>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default Login
