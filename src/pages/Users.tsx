import {useEffect, useState} from "react";
import {UserInterface} from "../interfaces/user.tsx";
import axios from "axios";
import {Link} from "react-router-dom";


const Users = () => {
    const [userList, setUserList] = useState<UserInterface[]>();
    const getUserList = async () => {
        try {
            const userList = await axios.get(`https://reqres.in/api/users`);
            if(userList.status == 200){
                console.log(userList)
                setUserList(userList.data.data);
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    useEffect(()=>{
        getUserList();
    },[])

    return (
        <div className="overflow-hidden rounded-lg shadow-md border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead>
                <tr className="bg-gray-100 text-gray-800 font-bold text-left border-b border-gray-200">
                    <th className="py-2 px-4">Avatar</th>
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Email</th>
                </tr>
                </thead>
                <tbody className="text-gray-700">
                {userList && userList.map(user => (
                    <tr key={user.id} className="hover:bg-gray-100">
                        <td className="py-2 px-4">
                            <img src={user.avatar} alt={user.first_name} className="h-12 w-12 rounded-full mx-auto"/>
                        </td>
                        <td className="py-2 px-4">
                            <Link to={`/profile/${user.id}`} className="text-blue-500 hover:underline">{user.first_name} {user.last_name}</Link>
                        </td>
                        <td className="py-2 px-4">{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}

export default Users;