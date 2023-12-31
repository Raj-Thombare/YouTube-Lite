import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ytLogo from "../assets/yt_logo.png";
import ytLogoMobile from "../assets/yt_logo_mobile.png"

import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { IoMdMic } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";

import { useApiData } from '../context/contextApi';
import Loader from '../shared/Loader';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState<string>("");

    const { loading, openSidebar, setOpenSidebar } = useApiData();

    const navigate = useNavigate();

    const searchQueryHandler = (event: React.KeyboardEvent<HTMLInputElement> | "searchButton") => {
        if ((event === "searchButton" || (event.key === "Enter" && searchQuery?.length > 0))) {
            navigate(`searchResult/${searchQuery}`);
        }
    }

    const mobileMenuToggle = () => {
        setOpenSidebar(!openSidebar)
    }

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    return (
        <div className="flex justify-between items-center py-3 px-[10px] md:px-8 h-14 bg-[#ffffff]  opacity-95 sticky top-0 z-10">
            {loading && <Loader />}

            <div className="flex h-5 items-center">
                {
                    pageName !== 'video' &&
                    <div className='flex md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#0000001a]' onClick={mobileMenuToggle} >
                        <RxHamburgerMenu color="black" size={25} />
                    </div>
                }
                <Link to="/" className='ml-0 md:ml-0 flex gap-1 items-center justify-center'>
                    <img
                        className="h-5 hidden md:flex"
                        src={ytLogo}
                        alt="Youtube"
                    />
                    <img
                        className="h-5 md:hidden"
                        src={ytLogoMobile}
                        alt="Youtube"
                        height={30}
                        width={30}
                    />
                </Link>
            </div>

            <div className="group flex items-center">
                <div className="group flex items-center mr-5">
                    <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#cccccc] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                        <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                            <GoSearch className="text-xl" size={15} />
                        </div>
                        <input
                            type="text"
                            className="bg-transparent outline-none pr-5 pl-5 md:pl-0 w-40 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                            placeholder="Search"
                            value={searchQuery}
                        />
                    </div>
                    <button
                        className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#cccccc] rounded-r-3xl bg-[#0000000D] hover:bg-[#0000001a]"
                        onClick={() => searchQueryHandler("searchButton")}
                    >
                        <GoSearch className="text-xl" />
                    </button>
                </div>
                <div className="text-xl hidden md:block p-3 rounded-full bg-[#0000000D] hover:bg-[#0000001a] cursor-pointer">
                    <IoMdMic style={{ fill: 'black' }} />
                </div>
            </div>

            <div className="md:flex gap-3 items-center text-xl">
                <div className="hidden md:block text-xl p-3 rounded-full hover:bg-[#0000001a] cursor-pointer">
                    <RiVideoAddLine style={{ fill: 'black' }} />
                </div>
                <div className="hidden md:block text-xl p-3 rounded-full hover:bg-[#0000001a] cursor-pointer">
                    <div className="relative">
                        <BsBell style={{ fill: 'black' }} />
                        <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1 text-white">
                            9+
                        </span>
                    </div>
                </div>
                <div className='text-xl ml-3 rounded-full cursor-pointer'>
                    <img src="https://yt3.ggpht.com/yti/ADpuP3MkDMkZgfX0xt3xM-uN3CXDTqvWLHsVWM1jfT8TBg=s88-c-k-c0x00ffffff-no-rj"
                        className="w-9 h-9 rounded-full" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Header;