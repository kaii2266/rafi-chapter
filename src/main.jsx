import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import RegisterPage from './Pages/RegisterPage.jsx'
import ErrorPage from './Pages/404.jsx'
import Product from './Pages/Product.jsx'
import ContohState from '../ContohState.jsx'
import LoginPage from './Pages/LoginPage.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <div>Hello World</div>,
    errorElement : <ErrorPage />
  },
  {
    path : '/login',
    element : < LoginPage/>
  },
  {
  path : '/register',
  element : <RegisterPage />
},
{
  path : '/product',
  element : <Product/>
},
{
  path : '/contohUseStage',
  element: <ContohState/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)