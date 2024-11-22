import React from 'react'
import ButtonComponent from '../Elements/Button'
import InputFrom from '../Elements/InputFrom'
const FormRegister = () => {
  return (
    <form>
            <InputFrom
                typeInput="email"
                placeholderInput="example@gmail.com"
                nameInput="email"
                judulInput="Email"
            />
            <InputForm
                typeInput="text"
                placeholderInput="Enter Your Username"
                nameInput="username"
                judulInput="Username"
            />
            <InputForm
                typeInput="password"
                placeholderInput=""
                nameInput="password"
                judulInput="Password"
            />
            <InputForm
                typeInput="password"
                placeholderInput=""
                nameInput="pass2"
                judulInput="Confirm Password"
            />
            <ButtonComponent classname="bg-blue-400 w-full">Register</ButtonComponent>
        </form>
  )
}

export default FormRegister