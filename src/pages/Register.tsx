import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const Register = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    /*const [name, setName] = useState("");*/
    const [phoneNo, setPhoneNo] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Submit ok !");
        
        if (!usernameError && !emailError && !passwordError){
            console.log("Errors Validate Done");
            try {
                const response = await axios.post("http://localhost:8000/api/users/register",{
                    username : username,
                    email : email,
                    password : password,
                    phone : phoneNo
                })
                if (response.status === 200){
                    toast.success("User registered successfully. :)")
                }
            }catch (error){
                console.log(error);
            }
        }
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">User Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Username:
                            <input
                                type="text"
                                name="username"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                onChange={(e) => setUserName(e.target.value)}
                                onBlur={() => {
                                    if (username.length < 6) {
                                        setUsernameError("Username must be atleast 6 characters long and it cannot be blank.");
                                    }else{
                                        setUsernameError("");
                                    }
                                }}
                            />
                            {usernameError &&
                                <div className="error-txt text-red-800">
                                    {usernameError}
                                </div>
                            }
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Password:
                            <input
                                type="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Confirm Password:
                            <input
                                type="password"
                                name="confirmPassword"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onBlur={() => {
                                    if (password !== confirmPassword) {
                                        setPasswordError("Password and confirm password are not matching.");
                                    }else{
                                        setPasswordError("");
                                    }
                                }}
                            />
                            {passwordError &&
                                <div className="error-txt text-red-800">
                                    {passwordError}
                                </div>
                            }
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Name:
                            <input
                                type="text"
                                name="name"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                /*onChange={(e) => setName(e.target.value)}*/
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Email:
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={()=>{
                                    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

                                    if (email.length == 0 ) {
                                        setEmailError("Email Address cannot be blank.")
                                    }else if (!regex.test(email)){
                                        setEmailError("Email Address is not valid.")
                                    }else{
                                        setEmailError("");
                                    }
                                }}
                            />
                            {emailError &&
                                <div className="error-txt text-red-800">
                                    {emailError}
                                </div>
                            }
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">
                            Phone Number:
                            <input
                                type="tel"
                                name="phoneNumber"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                onChange={(e) => setPhoneNo(e.target.value)}
                                onBlur={()=>{
                                    const regex = /^(?:0|94|\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/g;

                                    if (phoneNo.length == 0 ) {
                                        setPhoneError("Phone Number cannot be blank.")
                                    }else if (!regex.test(phoneNo)){
                                        setPhoneError("Phone Number is not valid.")
                                    }else{
                                        setPhoneError("");
                                    }
                                }}
                            />
                            {phoneError &&
                                <div className="error-txt text-red-800">
                                    {phoneError}
                                </div>
                            }
                        </label>
                    </div>
                    <button type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
