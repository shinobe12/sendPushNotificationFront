import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Routers } from './routers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './Context/theme'
import {AuthProvider} from './Context/auth'
//import { ThemeProvider } from '../src/components/Context/index'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

    <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <AuthProvider>
            <Routers/>
            </AuthProvider>
        </ThemeProvider>
    </QueryClientProvider>

)
