import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import  Users from './pages/Users.tsx'
import Profile from './pages/Profile'
import Layout from "./components/Layout.tsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="profile/:userId" element={<Profile/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
