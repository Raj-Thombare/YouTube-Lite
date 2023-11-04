import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ytLogo from "../assets/yt_logo.png";
import ytLogoMobile from "../assets/yt_logo_mobile.png"

import { FiMenu } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { IoMdMic } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { BsBell } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";

import { useApiData } from '../context/contextApi';
import Loader from '../shared/Loader';

const Header = () => {

    const [searchQuery, setSearchQuery] = useState<string>("");

    const { loading, mobileMenu, setMobileMenu } = useApiData();

    const navigate = useNavigate();

    const searchQueryHandler = (event: React.KeyboardEvent<HTMLInputElement> | "searchButton") => {
        if ((event === "searchButton" || (event.key === "Enter" && searchQuery?.length > 0))) {
            navigate(`searchResult/${searchQuery}`);
        }
    }

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu)
    }

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    return (
        <div className="flex justify-between items-center px-14 h-14 bg-[#ffffff]  opacity-95 sticky top-0 z-10">
            {loading && <Loader />}

            <div className="flex h-5 items-center">
                {
                    pageName !== 'video' && (
                        <div className='flex md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#0000001a]' onClick={mobileMenuToggle} >
                            {
                                mobileMenu ? (
                                    <CgClose color="black" size={25} />
                                ) : (
                                    <FiMenu color="black" size={25} />
                                )
                            }
                        </div>
                    )
                }
                <Link to="/" className='flex gap-1 items-center justify-center'>
                    <img
                        className="h-5 hidden md:flex"
                        src={ytLogo}
                        alt="Youtube"
                    />
                    <img
                        className="h-5 md:hidden"
                        src={ytLogoMobile}
                        alt="Youtube"
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
                            className="bg-transparent outline-none pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
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
                <div className="text-xl p-3 rounded-full bg-[#0000000D] hover:bg-[#0000001a] cursor-pointer">
                    <IoMdMic style={{ fill: 'black' }} />
                </div>
            </div>

            <div className="flex gap-3 items-center text-xl">
                <div className="text-xl p-3 rounded-full hover:bg-[#0000001a] cursor-pointer">
                    <RiVideoAddLine style={{ fill: 'black' }} />
                </div>
                <div className="text-xl p-3 rounded-full hover:bg-[#0000001a] cursor-pointer">
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