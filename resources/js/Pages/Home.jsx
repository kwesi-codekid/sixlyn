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

export default function Welcome(props) {
    return (
        <div className="bg-white">
            <Head title="Welcome to Sixlyn" />

            {/* Navbar */}
            <PublicNavbar />

            {/* Header */}
            <div className="landing h-[85%] flex flex-col-reverse items-center  !bg-no-repeat !bg-fixed !bg-cover md:flex-row p-5">
                <div className="w-full md:w-3/5 lg:pr-[10rem]">
                    <Fade triggerOnce direction="down" cascade>
                        <h2 className="font-poppins font-bold text-center text-slate-100 md:text-left text-3xl lg:text-7xl lg:leading-[5rem] md:pb-4">
                            Elegant Gift Hamper Services
                        </h2>
                        <p className="font-quicksand text-slate-300 text-center md:text-left lg:pr-[10rem]">
                            Put smiles on your loved ones with our premium gift
                            wrapping services. Customize your hamper and get it
                            wrapped and delivered expertly
                        </p>

                        <button className="my-6 p-2 w-[10rem] rounded-full bg-purple-500 hover:bg-purple-900 transition-all font-poppins text-lg text-white mx-auto block lg:inline">
                            Shop
                        </button>
                    </Fade>
                </div>
                <div className="w-full md:w-2/5 p-5">
                    <Fade triggerOnce delay={300}>
                        <img
                            src={giftBasket}
                            className="w-full opacity-80"
                            alt="Gift Basket"
                        />
                    </Fade>
                </div>
            </div>

            {/* Shop Categories */}
            <h2 className="font-poppins font-bold text-3xl md:text-5xl text-center text-slate-900 my-8">
                Top Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 p-5 gap-5 md:gap-10 md:p-10">
                <Fade triggerOnce direction="left">
                    <div className="h-72 rounded-2xl bg-gray-800"></div>
                </Fade>
                <Fade triggerOnce direction="left" delay={100}>
                    <div className="h-72 rounded-2xl bg-orange-500"></div>
                </Fade>
                <Fade
                    triggerOnce
                    direction="left"
                    delay={200}
                    className="md:!col-span-2"
                >
                    <div className="h-72 rounded-2xl bg-red-600"></div>
                </Fade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5 md:gap-10 md:p-10">
                <Fade triggerOnce direction="right" className="md:col-span-2">
                    <div className="h-72 rounded-2xl bg-gray-300 md:col-span-2"></div>
                </Fade>
                <Fade triggerOnce direction="right" delay={100}>
                    <div className="h-72 rounded-2xl bg-green-500"></div>
                </Fade>
                <Fade triggerOnce direction="right" delay={200}>
                    <div className="h-72 rounded-2xl bg-blue-500"></div>
                </Fade>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:px-20 py-10">
                <Fade cascade>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left py-3 gap-3">
                        <div className="w-full md:w-1/5">
                            <FaShippingFast className="text-center text-5xl text-purple-700 inline-block" />
                        </div>
                        <div className="w-full md:3">
                            <h4 className="font-poppins text-slate-700 text-lg lg:text-2xl font-bold">
                                Fast Delivery
                            </h4>
                            <p className="font-quicksand text-sm lg:text-md text-slate-400">
                                Free Shipping to Accra
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left py-3 gap-3">
                        <div className="w-full md:w-1/5">
                            <FaRegCheckCircle className="text-center text-5xl text-purple-700 inline-block" />
                        </div>
                        <div className="w-full md:3">
                            <h4 className="font-poppins text-slate-700 text-lg lg:text-2xl font-bold">
                                Highly Customized
                            </h4>
                            <p className="font-quicksand text-sm lg:text-md text-slate-400">
                                Custom Hamper to Suit You
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left py-3 gap-3">
                        <div className="w-full md:w-1/5">
                            <FaWallet className="text-center text-5xl text-purple-700 inline-block" />
                        </div>
                        <div className="w-full md:3">
                            <h4 className="font-poppins text-slate-700 text-lg lg:text-2xl font-bold">
                                Secure Payment
                            </h4>
                            <p className="font-quicksand text-sm lg:text-md text-slate-400 capitalize">
                                Only secured payments accepted
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left py-3 gap-3">
                        <div className="w-full md:w-1/5">
                            <FaHeadphonesAlt className="text-center text-5xl text-purple-700 inline-block" />
                        </div>
                        <div className="w-full md:3">
                            <h4 className="font-poppins text-slate-700 text-lg lg:text-2xl font-bold">
                                Online Support
                            </h4>
                            <p className="font-quicksand text-sm lg:text-md text-slate-400 capitalize">
                                24/7 Technical Support
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Top Picks */}
            <div className="p-5 md:p-10">
                <h2 className="font-poppins font-bold text-3xl md:text-5xl text-center text-slate-900 mb-8">
                    Best Seller Products
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
                    <Fade>
                        {[1, 2, 3, 4, 5, 6].map((idc) => (
                            <ProductCard
                                key={idc}
                                name={"Hennessey VSOP"}
                                price="$995.00"
                            />
                        ))}
                    </Fade>
                </div>
            </div>

            {/* Footer */}
            <Fade triggerOnce>
                <Footer />
            </Fade>
        </div>
    );
}
