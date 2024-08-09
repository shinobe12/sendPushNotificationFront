
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Login} from "../pages/Login"
import { Notification } from '../pages/Notification/index.'
import { Home } from '../pages/Home'

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
      },
    {
  path: '/login',
  element: <Login/>,
},
{
    path: '/notification',
    element: <Notification/>,
  }
])
