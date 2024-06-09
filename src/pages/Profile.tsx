import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {UserInterface} from "../interfaces/user.tsx";
import {useEffect} from "react";

const Profile = () => {
    const { userId } = useParams();
    /*User State*/

    /*const [user, setUser] = useState<{
        first_name :string,last_name:string,email:string,avatar:string
    }>();*/

    const [user, setUser] = useState<UserInterface>();

    const getUser = async () => {
        try {
            const user = await axios.get(`https://reqres.in/api/users/${userId}`);
            if(user.status == 200){
                setUser(user.data.data);
            }
            console.log(user.data.data);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    useEffect(()=>{
        /*code to trigger as a side effect*/
        getUser();
    },[])
    /*dependency array*/

    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-3xl font-bold mb-4">Profile - {userId}</h1>
            {/*<button
                onClick={getUser}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
                Get User
            </button>*/}
            {/*Conditional Rendering*/}
            {user && (
                <div className="mt-4 p-4 border border-gray-300 rounded shadow-md w-50">
                    <img src={user.avatar} alt="User Avatar" className="rounded-full mb-4" />
                    <p className="text-lg font-semibold">{user.first_name} {user.last_name}</p>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            )}
        </div>
    );
}

export default Profile;
