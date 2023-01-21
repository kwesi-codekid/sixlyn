import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Avatar, Badge } from "antd";
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../images/gift-basket.png";

const MyNavbar = () => {
    const toggleCollapse = () => {
        document.getElementById("mobileMenu").classList.toggle("hidden");
    };
    return (
        <div>
            <nav className="bg-white shadow-lg">
                <div className="max-w-8xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex justify-between w-screen">
                            <div className="flex items-center space-x-20">
                                {/* <!-- Website Logo --> */}
                                <Link
                                    href="#"
                                    className="flex items-center py-4 px-2"
                                >
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        className="h-8 w-8 mr-2"
                                    />
                                    <span className="font-bold text-purple-700 text-2xl uppercase">
                                        Sixlyn
                                    </span>
                                </Link>
                                {/* <!-- Primary Navbar items --> */}
                                <div className="hidden md:flex items-center space-x-8">
                                    <Link
                                        href=""
                                        className="py-4 px-2 text-green-500 font-semibold "
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href=""
                                        className="py-4 px-2 text-slate-600 font-semibold hover:text-green-500 transition duration-300"
                                    >
                                        Shop
                                    </Link>
                                    <Link
                                        href={route("about")}
                                        className="py-4 px-2 text-slate-600 font-semibold hover:text-green-500 transition duration-300"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href={route("contact")}
                                        className="py-4 px-2 text-slate-600 font-semibold hover:text-green-500 transition duration-300"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                            {/* <!-- Secondary Navbar items --> */}
                            <div className="hidden md:flex items-center space-x-8">
                                <Badge
                                    size="small"
                                    className="font-poppins"
                                    count={3}
                                    offset={[-5, 10]}
                                    showZero
                                >
                                    <Avatar
                                        icon={
                                            <ShoppingOutlined className="text-slate-700 text-2xl" />
                                        }
                                        className="bg-transparent"
                                        shape="square"
                                    />
                                </Badge>

                                <Link>My Account</Link>
                            </div>
                        </div>
                        {/* <!-- Mobile menu button --> */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="outline-none mobile-menu-button"
                                onClick={toggleCollapse}
                            >
                                <svg
                                    className=" w-6 h-6 text-slate-600 hover:text-purple-700 "
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- mobile menu --> */}
                <div className="hidden mobile-menu" id="mobileMenu">
                    <ul className="">
                        <li className="active">
                            <Link
                                href="index.html"
                                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#services"
                                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("about")}
                                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("contact")}
                                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default MyNavbar;
