import React from 'react'
import LoginHeader from '../LoginPage/LoginHeader.js'
import LoginInput from '../LoginPage/LoginInput.js'
import { useParams } from 'react-router-dom'

export default function SignInForm() {
  let {signin} = useParams()
  return (
    <>
    <LoginHeader signin={signin}/>
    <LoginInput signin={signin}/>
    </>
  )
}
