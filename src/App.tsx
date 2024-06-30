import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import  Users from './pages/Users.tsx'
import Profile from './pages/Profile'
import Layout from "./components/Layout.tsx";
import Register from "./pages/Register";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/users" element={<Users/>}/>
                        <Route path="profile/:userId" element={<Profile/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    )
}

export default App
