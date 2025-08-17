import React from 'react'


const Footer = () => {
    return (
        <footer className="px-6 md:px-16 pt-8 w-full text-gray-500 mt-20">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">

                    <div className="flex flex-col items-start justify-center cursor-pointer">
                        <h2 className="text-[34px] font-bold flex gap-0">
                            <span className="text-slate-700 text-shadow-md/50">Chalk</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-300 to-sky-800">Board</span>
                        </h2>
                    </div>

                    <p className="mt-6 text-sm">
                        Experience the convinience.<br />
                        Transform your data into insightful content.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li className='hover:scale-110'><a href="#">Home</a></li>
                            <li className='hover:scale-110'><a href="#">About us</a></li>
                            <li className='hover:scale-110'><a href="#">Contact us</a></li>
                            <li className='hover:scale-110'><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
                        <div className="text-sm space-y-2">
                            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                            <div className="flex items-center gap-2 pt-4">
                                <input className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-[#66a3ff] outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email" />
                                <button className="bg-primary w-24 h-9 text-white rounded cursor-pointer">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 © <span className='text-primary text-semibold'>Agnik Mukherhjee</span>. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer