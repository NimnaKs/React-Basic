import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Users from './pages/Users.tsx'
import Profile from './pages/Profile'
import Layout from "./components/Layout.tsx";
import Register from "./pages/Register";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import {AuthProvider} from "./utils/AuthContext";

function App() {
    return (
        <>
            <AuthProvider>
                <>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout/>}>
                                <Route path="/" element={<Login/>}/>
                                <Route path="/users" element={<Users/>}/>
                                <Route path="profile/:userId" element={<Profile/>}/>
                                <Route path="/register" element={<Register/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                    <ToastContainer/>
                </>
            </AuthProvider>
        </>
    )
}

export default App
