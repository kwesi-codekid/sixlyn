import {Link} from '@inertiajs/inertia-react'
import {TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiMail} from 'react-icons/ti'

export default function Footer() {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 lg:px-16 bg-gray-200">
            {/* Col 1 */}
            <div className="p-4">
                <h3 className="font-quicksand font-bold text-2xl text-purple-700 tracking-3">
                    SIXLYN
                </h3>
                <p className="text-slate-600 font-medium font-quicksand text-sm pr-8 mt-4">
                    Sixlyn is a gifting service that offers curated hampers for
                    various occasions. It includes high-quality products such as
                    gourmet food, wine and luxury items. The hampers are
                    beautifully packaged and can be customized to suit your
                    needs. Sixlyn makes gift giving easy and memorable.
                </p>
                <div className="flex gap-5 mt-4">
                    <TiSocialFacebook className='text-purple-900 text-2xl' />
                    <TiSocialTwitter className='text-purple-900 text-2xl' />
                    <TiSocialInstagram className='text-purple-900 text-2xl' />
                    <TiMail className='text-purple-900 text-2xl' />
                </div>
            </div>

            {/* Col 2 */}
            <div className="p-4">
                <h3 className="font-poppins font-bold text-xl text-slate-800">Quick Links</h3>

                <p className="font-quicksand text-slate-600 text-lg my-0 md:my-2">Home</p>
                <p className="font-quicksand text-slate-600 text-lg my-0 md:my-2">About</p>
                <p className="font-quicksand text-slate-600 text-lg my-0 md:my-2">Shop</p>
                <p className="font-quicksand text-slate-600 text-lg my-0 md:my-2">Contact</p>
            </div>

            {/* Col 3 */}
            <div className="p-4">
                <h3 className="font-poppins font-bold text-xl text-slate-800">Contact</h3>
                
                <p className="font-quicksand text-slate-600 text-lg my-0 md:my-2">+233 (0) 59 421 3496</p>
                <p className="font-quicksand text-slate-600 text-lg my-0 md:my-2">info@sixlyn.com</p>
                <p className="font-quicksand text-slate-600 text-lg my-0 md:my-2">Mempeasem, East Legon</p>
                <p className="font-quicksand text-slate-600 text-lg my-0 md:my-2">Accra, Ghana</p>
            </div>
        </div>
        <div className="bg-gray-800 flex items-center px-4 py-3 justify-between">
            <p className="text-slate-300 font-quicksand text-sm">&copy; 2023 Sixlyn</p>
            <p className="text-slate-300 font-quicksand text-sm">All Rights Reserved</p>
        </div>
        </>
    );
}
