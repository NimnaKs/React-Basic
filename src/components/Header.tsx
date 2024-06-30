import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCog, faExchangeAlt, faFileInvoice, faHome, faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-500 text-white shadow-md">
            <div className="container mx-auto">
                <nav className="navigation flex justify-center items-center py-4">
                    <ul className="flex space-x-8">
                        <li className="flex items-center hover:text-gray-300">
                            <NavLink to="/"> <FontAwesomeIcon icon={faHome} className="mr-2"/> Login </NavLink>
                        </li>
                        <li className="flex items-center hover:text-gray-300">
                            <FontAwesomeIcon icon={faExchangeAlt} className="mr-2"/>
                            Fund Transfers
                        </li>
                        <li className="flex items-center hover:text-gray-300">
                            <FontAwesomeIcon icon={faFileInvoice} className="mr-2"/>
                            Bill Payment
                        </li>
                        <li className="flex items-center hover:text-gray-300">
                            <NavLink to="/profile/user"> <FontAwesomeIcon icon={faUser} className="mr-2"/> Profile
                            </NavLink>
                        </li>
                        <li className="flex items-center hover:text-gray-300">
                            <NavLink to="/register" className="flex items-center">
                                <FontAwesomeIcon icon={faUserPlus} className="mr-2"/>
                                Register
                            </NavLink>
                        </li>
                        <li className="flex items-center hover:text-gray-300">
                            <NavLink to="/users"> <FontAwesomeIcon icon={faCog} className="mr-2"/> Settings </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
