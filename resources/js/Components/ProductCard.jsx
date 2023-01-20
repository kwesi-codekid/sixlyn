import {AiOutlineShoppingCart} from 'react-icons/ai'

export default function ProductCard({ name, price, image }) {
    return (
        <div className="overflow-x-hidden">
            <div className="h-72 bg-gray-200 rounded-2xl"></div>
            <h4 className="font-poppins text-xl text-slate-700">{name}</h4>
            <div className="flex items-center gap-4 relative -left-[11rem] hover:left-0 transition-all duration-700">
                <button className="p-1 w-[10rem] rounded-full bg-purple-500 hover:bg-purple-900 transition-all duration-500 font-poppins text-lg text-white">
                    <AiOutlineShoppingCart className='inline mr-2' />
                    Add To Card
                </button>
                <p className="font-poppins font-bold text-2xl text-slate-800">
                    {price}
                </p>
            </div>
        </div>
    );
}
