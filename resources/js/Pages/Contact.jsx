import { Link, Head } from "@inertiajs/inertia-react";
import { Fade } from "react-awesome-reveal";
import {
    FaShippingFast,
    FaWallet,
    FaHeadphonesAlt,
    FaRegCheckCircle,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import PublicNavbar from "../Components/PublicNavbar";
import giftBasket from "../images/gift-basket.png";

export default function Contact({ products, auth }) {
    console.log(products);
    return (
        <div className="bg-white">
            <Head title="Contact" />

            {/* Navbar */}
            <PublicNavbar />

            {/* Header */}
            <div className=" h-[85%] flex flex-col-reverse items-center  !bg-no-repeat !bg-fixed !bg-cover md:flex-row p-5">
                <h1>Contact</h1>
            </div>
        </div>
    );
}
