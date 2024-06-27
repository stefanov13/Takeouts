import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='wrapper'>
            <Header />
            <main>
                <Routes>|
                    <Route path="/" element={<Home />} />
                    {/* <Route path="create-recipe/" element={<CreateRecipe />} /> */}
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
