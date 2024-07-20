import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'

function App() {

    return (
        <div className='wrapper'>

            <Header />

            <main className='heroMain'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='auth/' element={<Auth />} />
                    {/* <Route path="create-recipe/" element={<CreateRecipe />} /> */}
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App