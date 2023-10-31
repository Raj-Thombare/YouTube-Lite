import { FiMenu } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import { IoMdMic } from "react-icons/io";
import { BsCameraVideo, BsBell } from "react-icons/bs";

import ytLogo from "../assets/yt_logo.png";

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-14 h-14 bg-[#ffffff] opacity-95 sticky top-0 z-50">
            <div className="flex gap-8 items-center text-2xl">
                <div>
                    <FiMenu color="black" />
                </div>
                <Link to="/">
                    <div className="flex gap-1 items-center justify-center">
                        <img
                            className="h-5"
                            src={ytLogo}
                            alt="Youtube"
                        />
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-center gap-5">
                <form action="" method="get">
                    <div className="flex bg-transparent items-center h-10 px-4 pr-0 rounded-full border border-[#cccccc]">
                        <div className="flex gap-4 items-center pr-5">
                            <div>
                                <GoSearch className="text-xl" style={{ fill: 'black' }} />
                            </div>
                            <input type="text" className="w-96 bg-transparent focus:outline-none border-none" />
                            <TfiClose className="text-xl cursor-pointer" style={{ fill: 'black' }} size={20} />
                        </div>
                        <button className="h-10 w-16 flex items-center justify-center bg-[#0000000D] rounded-r-full border border-[#cccccc]">
                            <GoSearch className="text-xl" size={20} style={{ fill: 'black' }} />
                        </button>
                    </div>
                </form>
                <div className="text-xl p-3 bg-[#0000000D] rounded-full">
                    <IoMdMic style={{ fill: 'black' }} />
                </div>
            </div>
            <div className="flex gap-5 items-center text-xl">
                <BsCameraVideo style={{ fill: 'black' }} />
                <div className="relative">
                    <BsBell style={{ fill: 'black' }} />
                    <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1 text-white">
                        9+
                    </span>
                </div>
                <img src="https://yt3.ggpht.com/yti/ADpuP3MkDMkZgfX0xt3xM-uN3CXDTqvWLHsVWM1jfT8TBg=s88-c-k-c0x00ffffff-no-rj"
                    className="w-9 h-9 rounded-full" alt="logo" />
            </div>
        </div>
    )
}

export default Navbar;