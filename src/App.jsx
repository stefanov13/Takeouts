import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='wrapper'>
            <img className="heroImage" src="/images/landing_page_food_1920.png" alt="Cooking-bg-picture" />
            <div className="heroOverlay"></div>
            <Header />

            <div className="heroWrapper">
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='auth/' element={<Auth />} />
                        {/* <Route path="create-recipe/" element={<CreateRecipe />} /> */}
                    </Routes>
                </main>
            </div>
            
            <Footer />
        </div>
    )
}

export default App
