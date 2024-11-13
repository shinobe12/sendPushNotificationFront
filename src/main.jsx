import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {Routers} from './routers'
import { QueryClient,  QueryClientProvider } from '@tanstack/react-query'
import {ThemeProvider} from '../src/components/Context/index'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
    
    <QueryClientProvider client={queryClient}>
       <ThemeProvider>
       <RouterProvider router={Routers}/>
       </ThemeProvider>
    </QueryClientProvider>

)
