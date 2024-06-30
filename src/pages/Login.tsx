import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth} from "../utils/AuthContext";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/users/login", {
                email: email,
                password: password,
            });
            if (response.status === 200) {
                login(response.data.token);
                toast.success("Authentication successful. :)");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            toast.error("Authentication failed. :(");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Email:
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Password:
                            <input
                                type="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
